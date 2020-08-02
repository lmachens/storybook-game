import { createElement } from "../../utils/elements";
import starBtnImg from "../../assets/imgHandheldDesign/starButton.svg";
import joyBtnImg from "../../assets/imgHandheldDesign/joystick.svg";
import aBtnImg from "../../assets/imgHandheldDesign/aButton.svg";
import bBtnImg from "../../assets/imgHandheldDesign/bButton.svg";
import speakImg from "../../assets/imgHandheldDesign/speaker.svg";
import { basic } from "../game/game.stories";

export const createHandheldBody = () => {
  const body = createElement("div", { className: "gameBody" });
  const display = createElement("section", { className: "gameBody__display" });

  // const game = basic();
  // const gameScreen = createElement("div", {
  //   className: "gameBody__display--game",
  // });
  // gameScreen.append(game);
  // display.append(gameScreen);

  const cockpit = createElement("section", { className: "gameBody__cockpit" });
  const cockpitImages = [
    { imgSrc: starBtnImg, imgClass: "starButton" },
    { imgSrc: joyBtnImg, imgClass: "joystick" },
    { imgSrc: aBtnImg, imgClass: "aButton" },
    { imgSrc: bBtnImg, imgClass: "bButton" },
    { imgSrc: speakImg, imgClass: "speaker" },
  ];

  cockpitImages.forEach((controlImg) => {
    const button = createElement("img", { src: controlImg.imgSrc });
    button.className = controlImg.imgClass;
    cockpit.append(button);
  });

  body.append(display);
  body.append(cockpit);

  return body;
};
