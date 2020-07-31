import "./mainscreen.css";
import { MainScreen } from "./mainscreen";

export default { title: "Components/Mainscreen" };

export const OuterDiv = () => {
  const OuterDIV = MainScreen();
  return OuterDIV;
};

// export const basic = () => {
//   const size = Math.min(window.innerWidth - 20, window.innerHeight - 20);
//   const game = createGame(size, size);
//   return game.canvas;
// };

// export const controls = () => {
//   const size = Math.min(window.innerWidth - 20, window.innerHeight - 20);
//   const game = createGame(size, size);

//   const container = createElement("div", { className: "container" });
//   const controls = createControls(game);

//   container.append(controls);
//   container.append(game.canvas);

//   return container;
// };
