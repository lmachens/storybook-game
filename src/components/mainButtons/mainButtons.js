import { createElement } from "../../utils/elements";

export const MainButtons = () => {
  const OuterDIV = createElement("div", {
    className: "nokiaMainButtons",
  });

  const startButtonDiv = createElement("div", {});

  const sideButtonDiv = createElement("div", {});

  const startButton = createElement("button", {
    innerText: "Start",
  });

  const resetButton = createElement("button", {
    innerText: "⟲",
  });

  const pauseButton = createElement("button", {
    innerText: "❚❚",
  });

  OuterDIV.append(startButtonDiv);
  OuterDIV.append(sideButtonDiv);
  startButtonDiv.append(startButton);
  sideButtonDiv.append(resetButton);
  sideButtonDiv.append(pauseButton);

  startButton.addEventListener("click", () => {
    confirm("Do you really want to start the game?");
  });

  return OuterDIV;
};
