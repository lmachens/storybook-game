import { createElement } from "../../utils/elements";

const COLS = 24;
const ROWS = 24;
const KEY = {
  LEFT: 37,
  TOP: 38,
  RIGHT: 39,
  BOTTOM: 40,
};

const createCanvas = () => {
  const canvas = createElement("canvas", { className: "game" });
  return canvas;
};

const resize = (canvas, width, height) => {
  canvas.width = width;
  canvas.height = height;
};

const clear = (canvas) => {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
};

const drawPlayer = (canvas, player) => {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;
  const offsetLeft = player.left * cellWidth;
  // const offsetLeft =
  //   player.left * cellWidth - ((player.left * cellWidth) % cellWidth);
  const offsetTop = player.top * cellHeight;
  // const offsetTop =
  //   player.top * cellHeight - ((player.top * cellHeight) % cellHeight);

  const context = canvas.getContext("2d");
  context.beginPath();
  context.rect(offsetLeft, offsetTop, cellWidth, cellHeight);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
};
const drawObstacle = (canvas, obstacle) => {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;
  const offsetLeft = obstacle.left * cellWidth;
  // const offsetLeft =
  //   obstacle.left * cellWidth - ((obstacle.left * cellWidth) % cellWidth);
  const offsetTop = obstacle.top * cellHeight;
  // const offsetTop =
  //   player.top * cellHeight - ((player.top * cellHeight) % cellHeight);

  const context = canvas.getContext("2d");
  context.beginPath();
  context.rect(offsetLeft, offsetTop, cellWidth, cellHeight);
  context.fillStyle = "green";
  context.fill();
  context.closePath();
};

const createPlayer = () => {
  return {
    left: COLS / 2, // start position
    top: ROWS / 2, // start position
    speed: 2, // fields per second
    direction: "RIGHT", // TOP, RIGHT, BOTTOM, LEFT,
    aliveSince: Date.now(),
  };
};
const createObstacle = () => {
  return {
    left: setRandomPosition(COLS), // start position
    top: setRandomPosition(ROWS),
    // start position
  };
};

function setRandomPosition(baseValue) {
  return Math.random() * (baseValue - 1) + 1;
}

const movePlayer = (player, timePassed) => {
  const positionOffset = (player.speed * timePassed) / 1000;

  switch (player.direction) {
    case "TOP":
      player.top = (player.top - positionOffset) % COLS;
      if (player.top < 0) {
        player.top = ROWS;
      }
      break;
    case "RIGHT":
      player.left = (player.left + positionOffset) % COLS;
      break;
    case "BOTTOM":
      player.top = (player.top + positionOffset) % COLS;
      break;
    case "LEFT":
      player.left = player.left - positionOffset;
      if (player.left < 0) {
        player.left = COLS;
      }
      break;
  }
};
let obstacles = [];

export const createGame = (width, height) => {
  const canvas = createCanvas();
  let player = createPlayer();

  setInterval(function () {
    console.log("Alert");
    obstacles.push(createObstacle());
    player.speed = player.speed + 0.5;
  }, 3000);

  resize(canvas, width, height);

  const startLoop = () => {
    let lastDrawing = Date.now();
    console.log("Start Loop");

    const loop = () => {
      clear(canvas);

      const now = Date.now();
      movePlayer(player, now - lastDrawing);

      drawPlayer(canvas, player);

      obstacles.forEach((obstacle) => {
        drawObstacle(canvas, obstacle);
      });

      lastDrawing = now;

      obstacles.forEach((obstacle) => {
        function calcDistance() {
          let topDistance = player.top - obstacle.top;
          let leftDistance = player.left - obstacle.left;

          topDistance *= topDistance;
          leftDistance *= leftDistance;

          return Math.sqrt(topDistance + leftDistance);
        }

        let distance = calcDistance();
        if (distance < 1) {
          player.speed = 0;

          // let restart = confirm("Restart?");
          // if (restart == true) {
          //   player = createPlayer();
          //
          //   player.aliveSince = Date.now();
          // } else {
          //   alert("Thanks for playing");
          //   player.left = 8;
          //   player.top = 8;
          // }
        }
      });

      requestAnimationFrame(loop);
    };
    loop();
  };

  window.addEventListener("keydown", (event) => {
    if (event.keyCode === KEY.TOP) {
      player.direction = "TOP";
      return;
    }
    if (event.keyCode === KEY.RIGHT) {
      player.direction = "RIGHT";
      return;
    }
    if (event.keyCode === KEY.BOTTOM) {
      player.direction = "BOTTOM";
      return;
    }
    if (event.keyCode === KEY.LEFT) {
      player.direction = "LEFT";
      return;
    }
  });

  startLoop();

  return { canvas, player, obstacles };
};

export const createControls = (game) => {
  const controls = createElement("div", { className: "controls " });
  const faster = createElement("button", {
    innerText: "FASTER!",
    className: "controls__btn",
  });

  faster.addEventListener("click", () => {
    game.player.speed++;
  });

  const slower = createElement("button", {
    innerText: "SLOWER!",
    className: "controls__btn",
  });
  slower.addEventListener("click", () => {
    game.player.speed--;
  });

  const reset = createElement("button", {
    innerText: "RESET!",
    className: "controls__btn",
  });
  reset.addEventListener("click", () => {
    obstacles = [];
    Object.assign(game.player, createPlayer());
  });

  const aliveTime = createElement("div", {
    className: "controls__time",
    innerText: "0",
  });

  setInterval(() => {
    aliveTime.innerText = Math.floor(
      (Date.now() - game.player.aliveSince) / 1000
    );
  }, 100);

  controls.append(reset);
  controls.append(faster);
  controls.append(slower);
  controls.append(aliveTime);
  return controls;
};
