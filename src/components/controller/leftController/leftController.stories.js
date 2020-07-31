import "./leftController.css";
// import leftController from "./leftController.html";
import "./leftController";
import { createLeftController } from "./leftController";

export default { title: "game/leftController" };

export const basic = () => {
  const leftController = createLeftController();
  return leftController;
};
