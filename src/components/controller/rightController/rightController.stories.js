import "./rightController.css";
// import rightController from "./rightController.html";
import "./rightController";
import { createRightController } from "./rightController";

export default { title: "Components/Controller/RightController" };

export const basic = () => {
  const rightController = createRightController();
  return rightController;
};
