import "./main.css";
import { createMain } from "./main";
import { createGame } from "../../components/game/game";
import { createElement } from "../../utils/elements";
import { popUpWindow } from "../../components/popUpWindow/popUpWindow";

export default { title: "Pages/Main" };

export const basic = () => {
  const title = createElement("h1", { innerText: "Awesome Game!" });
  const subtitle = createElement("h2", { innerText: "Over9000" });
  const header = createElement("header", {}, [title, subtitle]);

  const game = createGame(200, 200);
  const main = createMain([header, game.canvas]);

  return main;
};
