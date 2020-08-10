import "./nokia.css";
import { ControlButtons } from "../../components/controlButtons/controlButtons";
import { MainButtons } from "../../components/mainButtons/mainButtons";
import { MainScreen } from "../../components/mainscreen/mainscreen";
import { createElement } from "../../utils/elements";
import { createGame } from "../../components/game/game";

export default { title: "Pages/Nokia" };

export const basic = () => {
  const main = createElement("main", {
    className: "mainMF",
  });

  const ButtonDIV = createElement("div");
  const mainScreen = MainScreen();
  const mainButtons = MainButtons();
  const controlButtons = ControlButtons();
  const game = createGame(350, 350);
  mainScreen.append(game.canvas);
  main.append(mainScreen);
  main.append(ButtonDIV);
  ButtonDIV.append(mainButtons);
  ButtonDIV.append(controlButtons);

  return main;
};
