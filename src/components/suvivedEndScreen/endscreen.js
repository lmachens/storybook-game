import { createElement } from "../../utils/elements";
import "./endscreen.css";
import survivedPlayerSrc from "../../assets/player_fische.png";

export const createEndscreen = () => {
  const endscreen = createElement("div", {
    className: "endscreen",
  });
  /*   const popupSize = Math.min(window.innerWidth - 20, window.innerHeight - 20); */
  /*   endscreen.style.heigt = popupSize;
  endscreen.style.widht = popupSize; */

  const survivedPlayer = createElement("img", {
    src: survivedPlayerSrc,
    className: "survivedPlayer",
  });
  endscreen.append(survivedPlayer);

  const survivalmessage = createElement("p", {
    className: "endscreenMessage",
    innerText:
      "Congratulation. You survived the virus and escaped the dungeon!",
  });
  endscreen.append(survivalmessage);

  return endscreen;
};

/* export const popUpWindow = () => {
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
  popUpWindow__container.append(button);
  return popUpWindow__container;
};
 */
