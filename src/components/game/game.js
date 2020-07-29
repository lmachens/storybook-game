const COLS = 16;
const ROWS = 16;
const KEY = {
  LEFT: 37,
  TOP: 38,
  RIGHT: 39,
  BOTTOM: 40,
};

const createCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.className = "game";
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

const drawSnake = (canvas, snake) => {
  const cellWidth = canvas.width / COLS;
  const cellHeight = canvas.height / ROWS;
  const offsetLeft = snake.left * cellWidth;
  const offsetTop = snake.top * cellHeight;

  const context = canvas.getContext("2d");
  context.beginPath();
  context.rect(offsetLeft, offsetTop, cellWidth, cellHeight);
  context.fillStyle = "red";
  context.fill();
  context.closePath();
};

const createSnake = () => {
  return {
    left: COLS / 2,
    top: ROWS / 2,
    length: 1,
    speed: 5, // fields per second
    direction: "RIGHT", // TOP, RIGHT, BOTTOM, LEFT
  };
};

const moveSnake = (snake, timeGone) => {
  const positionOffset = (snake.speed * timeGone) / 1000;
  switch (snake.direction) {
    case "TOP":
      snake.top = (snake.top - positionOffset) % COLS;
      if (snake.top < 0) {
        snake.top = ROWS;
      }
      break;
    case "RIGHT":
      snake.left = (snake.left + positionOffset) % COLS;
      break;
    case "BOTTOM":
      snake.top = (snake.top + positionOffset) % COLS;
      break;
    case "LEFT":
      snake.left = snake.left - positionOffset;
      if (snake.left < 0) {
        snake.left = COLS;
      }
      break;
  }
};

export const createGame = (width, height) => {
  const canvas = createCanvas();
  const snake = createSnake();

  resize(canvas, width, height);

  const startLoop = () => {
    let lastDrawing = Date.now();
    const loop = () => {
      clear(canvas);
      const now = Date.now();
      moveSnake(snake, now - lastDrawing);
      drawSnake(canvas, snake);
      lastDrawing = now;

      requestAnimationFrame(loop);
    };
    loop();
  };

  window.addEventListener("keydown", (event) => {
    if (event.keyCode === KEY.TOP) {
      snake.direction = "TOP";
      return;
    }
    if (event.keyCode === KEY.RIGHT) {
      snake.direction = "RIGHT";
      return;
    }
    if (event.keyCode === KEY.BOTTOM) {
      snake.direction = "BOTTOM";
      return;
    }
    if (event.keyCode === KEY.LEFT) {
      snake.direction = "LEFT";
      return;
    }
  });

  startLoop();

  return { canvas, snake };
};

export const createControls = (game) => {
  const controls = document.createElement("div");
  controls.className = "controls";
  const faster = document.createElement("button");
  faster.innerText = "FASTER!";
  faster.className = "controls__btn";

  faster.addEventListener("click", () => {
    game.snake.speed++;
  });

  const slower = document.createElement("button");
  slower.innerText = "SLOWER!";
  slower.className = "controls__btn";
  slower.addEventListener("click", () => {
    game.snake.speed--;
  });

  controls.append(faster);
  controls.append(slower);
  return controls;
};
