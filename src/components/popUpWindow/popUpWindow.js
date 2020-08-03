import { createElement } from "../../utils/elements";
import "./popUpWindow.css";

export const popUpWindow = () => {
  const popUpWindow__container = createElement("div", {
    className: "popUpWindow__container",
  });
  const button = createElement("button", {
    className: "popUp__button",
    innerText: "OK",
  });
  const imgContainer = createElement("div", { className: "imgContainer" });

  const popUp = createElement("div", { className: "popUp" });
  const textGameOVer = createElement("p", { innerText: "GAME OVER" });
  const textInf = createElement("p", { innerText: "YOU GOT INFECTED" });

  popUpWindow__container.append(popUp);
  popUpWindow__container.append(imgContainer);
  popUp.append(textGameOVer);
  popUp.append(textInf);
  popUp.append(button);
  return popUpWindow__container;
};
