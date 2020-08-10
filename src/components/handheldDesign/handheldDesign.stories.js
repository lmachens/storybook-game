import "./handheldDesign.css";
import { createHandheldBody } from "./handheldDesign";

export default { title: "components / handheldDesign" };

export const gameDesign = () => {
  const gameBody = createHandheldBody();
  return gameBody;
};
