import { createElement } from "../../../utils/elements";
export const createRightController = () => {
  const sectionRightController = createElement("section", {
    className: "rightController",
  });

  const listWrap = createElement("div", { className: "listWrap" });
  const scoreList = createElement("ol", { className: "scoreList" });
  sectionRightController.append(listWrap);
  const highScores = ["10400", "9000", "8006", "7500", "4230", "1200"];
  listWrap.append(scoreList);
  highScores.forEach((item) => {
    const score = createElement("li", { innerText: item });
    scoreList.append(score);
  });

  const keys = createElement("div", { className: "keys" });
  sectionRightController.append(keys);

  const buttons = ["btn-up-right", "btn-down-left"];
  buttons.forEach((btn) => {
    const button = createElement("button", { id: btn });
    keys.append(button);
  });
  return sectionRightController;
};
