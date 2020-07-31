import { createElement } from "../../utils/elements";
import { createLeftController } from "../../components/controller/leftController/leftController";
import { createRightController } from "../../components/controller/rightController/rightController";
import { createGame } from "../../components/game/game";

export const createArcadeScreen = () => {
  const arcadeScreenContainer = createElement("div", {
    className: "arcadeScreenContainer",
  });
  const arcadeConsole = createElement("main", { className: "arcadeConsole" });
  const leftController = createLeftController();
  const rightController = createRightController();

  const game = createGame(500, 500);
  game.canvas.classList.add("gameDisplay");

  arcadeScreenContainer.append(arcadeConsole);
  arcadeConsole.append(leftController);
  arcadeConsole.append(game.canvas);
  arcadeConsole.append(rightController);
  return arcadeScreenContainer;
};
