import "./handheldDesign.css";
import { createHandheldBody } from "./handheldDesign";

export default { title: "Components/Handheld" };

export const gameDesign = () => {
  const gameBody = createHandheldBody();
  return gameBody;
};
