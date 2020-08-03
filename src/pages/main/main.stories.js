import "./main.css";
import { createMain } from "./main";
import { createGame } from "../../components/game/game";
import { createElement } from "../../utils/elements";

export default { title: "Pages/Main" };

export const basic = () => {
  const game = createGame(200, 200);
  const title = createElement("h1", {innerText: "My awesome game"});
  const subtitle = createElement("h2", {innerText: "Over 9000"})
  const header = createElement("header", {}, [title, subtitle]) 

  const main = createMain([header, game.canvas]);
  // main.append(game.canvas);
  // main.append(header);

  return main;
};
