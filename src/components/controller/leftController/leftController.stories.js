import "./leftController.css";
// import leftController from "./leftController.html";
import "./leftController";
import { createLeftController } from "./leftController";

export default { title: "Components/Controller/LeftController" };

export const basic = () => {
  const leftController = createLeftController();
  return leftController;
};
