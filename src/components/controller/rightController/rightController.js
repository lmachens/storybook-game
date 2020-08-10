import { createElement } from "../../../utils/elements";
export const createRightController = () => {
  const sectionRightController = createElement("section", {
    className: "rightController",
  });

  const listWrap = createElement("div", { className: "listWrap" });
  const scoreTitle = createElement("header", { innerText: "Highscore" });
  listWrap.append(scoreTitle);

  const scoreList = createElement("ol", {
    className: "scoreList",
  });
  sectionRightController.append(listWrap);

  const highScores = ["10400", "9000", "8006"];
  listWrap.append(scoreList);
  highScores.forEach((item) => {
    const score = createElement("li", { innerText: item });
    scoreList.append(score);
  });

  const keys = createElement("div", { className: "keys" });
  sectionRightController.append(keys);

  // const buttons = ["btn-up-right", "btn-down-left"];
  // buttons.forEach((btn) => {
  //   const button = createElement("button", { id: btn });

  //   keys.append(button);
  // });

  const buttonA = createElement("button", {
    id: "btn-up-right",
    innerText: "A",
  });
  keys.append(buttonA);

  const buttonB = createElement("button", {
    id: "btn-down-left",
    innerText: "B",
  });
  keys.append(buttonB);

  return sectionRightController;
};
