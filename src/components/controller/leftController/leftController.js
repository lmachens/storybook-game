import { createElement } from "../../../utils/elements";
import triangleSrc from "../../../assets/triangle.svg";
export const createLeftController = () => {
  const sectionLeftController = createElement("section", {
    className: "leftController",
  });
  const lamp = createElement("div", { className: "lamp" });
  sectionLeftController.append(lamp);
  const keys = createElement("div", { className: "keys" });
  sectionLeftController.append(keys);

  const buttons = ["btn-up", "btn-left", "btn-right", "btn-down"];
  buttons.forEach((btn) => {
    const button = createElement("button", { id: btn });
    const smallImg = createElement("img", {
      src: triangleSrc,
      className: "btn__arrow",
    });
    keys.append(button);
    button.append(smallImg);
  });
  return sectionLeftController;
};
