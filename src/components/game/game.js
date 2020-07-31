import { createElement, generateRandomNumber } from "../../utils/elements";

const COLS = 16;
const ROWS = 16;
const KEY = {
  LEFT: 37,
  TOP: 38,
  RIGHT: 39,
  BOTTOM: 40,
};

const APPLE = new Image();
APPLE.src =
  "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+QXBwbGUgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTcuMDc4IDIzLjU1Yy0uNDczLS4zMTYtLjg5My0uNzAzLTEuMjQ0LTEuMTUtLjM4My0uNDYzLS43MzgtLjk1LTEuMDY0LTEuNDU0LS43NjYtMS4xMi0xLjM2NS0yLjM0NS0xLjc4LTMuNjM2LS41LTEuNTAyLS43NDMtMi45NC0uNzQzLTQuMzQ3IDAtMS41Ny4zNC0yLjk0IDEuMDAyLTQuMDkuNDktLjkgMS4yMi0xLjY1MyAyLjEtMi4xODIuODUtLjUzIDEuODQtLjgyIDIuODQtLjg0LjM1IDAgLjczLjA1IDEuMTMuMTUuMjkuMDguNjQuMjEgMS4wNy4zNy41NS4yMS44NS4zNC45NS4zNy4zMi4xMi41OS4xNy44LjE3LjE2IDAgLjM5LS4wNS42NDUtLjEzLjE0NS0uMDUuNDItLjE0LjgxLS4zMS4zODYtLjE0LjY5Mi0uMjYuOTM1LS4zNS4zNy0uMTEuNzI4LS4yMSAxLjA1LS4yNi4zOS0uMDYuNzc3LS4wOCAxLjE0OC0uMDUuNzEuMDUgMS4zNi4yIDEuOTQuNDIgMS4wMi40MSAxLjg0MyAxLjA1IDIuNDU3IDEuOTYtLjI2LjE2LS41LjM0Ni0uNzI1LjU1LS40ODcuNDMtLjkuOTQtMS4yMyAxLjUwNS0uNDMuNzctLjY1IDEuNjQtLjY0NCAyLjUyLjAxNSAxLjA4My4yOSAyLjAzNS44NCAyLjg2LjM4Ny42LjkwNCAxLjExNCAxLjUzNCAxLjUzNi4zMS4yMS41ODIuMzU1Ljg0LjQ1LS4xMi4zNzUtLjI1Mi43NC0uNDA1IDEuMS0uMzQ3LjgwNy0uNzYgMS41OC0xLjI1IDIuMzEtLjQzMi42My0uNzcyIDEuMS0xLjAzIDEuNDEtLjQwMi40OC0uNzkuODQtMS4xOCAxLjA5Ny0uNDMuMjg1LS45MzUuNDM2LTEuNDUyLjQzNi0uMzUuMDE1LS43LS4wMy0xLjAzNC0uMTI3LS4yOS0uMDk1LS41NzYtLjIwMi0uODU2LS4zMjMtLjI5My0uMTM0LS41OTYtLjI0OC0uOTA1LS4zNC0uMzgtLjEtLjc3LS4xNDgtMS4xNjQtLjE0Ny0uNCAwLS43OS4wNS0xLjE2LjE0NS0uMzEuMDg4LS42MS4xOTYtLjkwNy4zMjUtLjQyLjE3NS0uNjk1LjI5LS44NTUuMzQtLjMyNC4wOTYtLjY1Ni4xNTQtLjk5LjE3NS0uNTIgMC0xLjAwNC0uMTUtMS40ODYtLjQ1em02Ljg1NC0xOC40NmMtLjY4LjM0LTEuMzI2LjQ4NC0xLjk3My40MzYtLjEtLjY0NiAwLTEuMzEuMjctMi4wMzcuMjQtLjYyLjU2LTEuMTggMS0xLjY4LjQ2LS41MiAxLjAxLS45NSAxLjYzLTEuMjYuNjYtLjM0IDEuMjktLjUyIDEuODktLjU1LjA4LjY4IDAgMS4zNS0uMjUgMi4wNy0uMjI4LjY0LS41NjggMS4yMy0xIDEuNzYtLjQzNS41Mi0uOTc1Ljk1LTEuNTg2IDEuMjZ6Ii8+PC9zdmc+";

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

const createPlayer = () => {
  return {
    left: COLS / 2, // start position
    top: ROWS / 2, // start position
    speed: 5, // fields per second
    direction: "RIGHT", // TOP, RIGHT, BOTTOM, LEFT,
    aliveSince: Date.now(),
  };
};

const createGameObject = (gameObjectImage, canvas) => {
  return {
    img: gameObjectImage,
    xPos: generateRandomNumber(canvas.width),
    yPos: generateRandomNumber(canvas.height),
  };
};

const drawGameObject = (canvas, gameObject) => {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;
  const context = canvas.getContext("2d");
  context.drawImage(
    gameObject.img,
    gameObject.xPos,
    gameObject.yPos,
    cellWidth,
    cellHeight
  );
};

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

export const createGame = (width, height) => {
  const canvas = createCanvas();
  const player = createPlayer();

  resize(canvas, width, height);
  const appleObject = createGameObject(APPLE, canvas);

  const startLoop = () => {
    let lastDrawing = Date.now();
    const loop = () => {
      clear(canvas);
      const now = Date.now();
      movePlayer(player, now - lastDrawing);
      drawPlayer(canvas, player);
      lastDrawing = now;
      drawGameObject(canvas, appleObject);
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

  return { canvas, player };
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
