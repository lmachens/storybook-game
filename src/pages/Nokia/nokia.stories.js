import "./nokia.css";
import { ControlButtons } from "../../components/controlButtons/controlButtons";
import { MainButtons } from "../../components/mainButtons/mainButtons";
import { MainScreen } from "../../components/mainscreen/mainscreen";
import { createElement } from "../../utils/elements";

export default { title: "Pages/Nokia" };

export const basic = () => {
  const main = createElement("main", {
    className: "mainMF",
  });

  const ButtonDIV = createElement("div");
  const mainScreen = MainScreen();
  const mainButtons = MainButtons();
  const controlButtons = ControlButtons();

  main.append(mainScreen);
  main.append(ButtonDIV);
  ButtonDIV.append(mainButtons);
  ButtonDIV.append(controlButtons);

  return main;
};
