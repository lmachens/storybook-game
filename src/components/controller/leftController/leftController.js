import { createElement } from "../../../utils/elements";
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
    keys.append(button);
  });
  return sectionLeftController;
};
