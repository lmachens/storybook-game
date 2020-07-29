import "./main.css";
import { createMain } from "./main";
import { createGame } from "../../components/game/game";

export default { title: "Pages/Main" };

export const basic = () => {
  const main = createMain();

  const game = createGame(200, 200);
  main.append(game.canvas);

  return main;
};
