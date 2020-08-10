import "./leftController.css";
import "./rightController.css";
import { createRightController } from "./rightController";
import { createLeftController } from "./leftController";

export default { title: "Components/Controller" };

export const left = () => {
  const leftController = createLeftController();
  return leftController;
};

export const right = () => {
  const rightController = createRightController();
  return rightController;
};
