import "./game.css";
import { createGame, createControls } from "./game";

export default { title: "Components/Game" };

export const basic = () => {
  const size = Math.min(window.innerWidth - 20, window.innerHeight - 20);
  const game = createGame(size, size);
  return game.canvas;
};

export const controls = () => {
  const size = Math.min(window.innerWidth - 20, window.innerHeight - 20);
  const game = createGame(size, size);

  const container = document.createElement("div");
  container.className = "container";
  const controls = createControls(game);

  container.append(controls);
  container.append(game.canvas);

  return container;
};
