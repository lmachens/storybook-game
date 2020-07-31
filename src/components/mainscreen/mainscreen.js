import { createElement } from "../../utils/elements";

import { OuterDiv } from "./mainscreen.stories";
import { basic } from "../game/game.stories.js";
import { controls } from "../game/game.stories.js";
export const MainScreen = () => {
  const OuterDIV = createElement("div", {
    className: "nokiaScreen",
  });

  const logoDiv = createElement("div", {
    innerText: "neue fische",
  });

  const mainScreenDiv = createElement("div", {});
  const gameScreen = basic();
  const gameControls = controls();

  OuterDIV.append(logoDiv);
  OuterDIV.append(mainScreenDiv);
  mainScreenDiv.prepend(gameControls);

  return OuterDIV;
};
