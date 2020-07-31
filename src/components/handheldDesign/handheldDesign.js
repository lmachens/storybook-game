import { createElement } from "../../utils/elements";
import starBtnImg from "../../assets/imgHandheldDesign/starButton.svg";
import joyBtnImg from "../../assets/imgHandheldDesign/joystick.svg";
import aBtnImg from "../../assets/imgHandheldDesign/aButton.svg";
import bBtnImg from "../../assets/imgHandheldDesign/bButton.svg";

export const createHandheldBody = () => {
  const body = createElement("div", { className: "gameBody" });
  const display = createElement("section", { className: "gameBody__display" });
  const cockpit = createElement("section", { className: "gameBody__cockpit" });
  const cockpitImages = [
    { imgSrc: starBtnImg, imgClass: "starButton" },
    { imgSrc: joyBtnImg, imgClass: "joystick" },
    { imgSrc: aBtnImg, imgClass: "aButton" },
    { imgSrc: bBtnImg, imgClass: "bButton" },
  ];

  cockpitImages.forEach((controlImg) => {
    const button = createElement("img", { src: controlImg.imgSrc });
    cockpit.append(button);
  });
  body.append(display);
  body.append(cockpit);

  return body;
};
