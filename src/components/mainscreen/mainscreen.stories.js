import "./mainscreen.css";
import { MainScreen } from "./mainscreen";

export default { title: "Components/Mainscreen" };

export const OuterDiv = () => {
  const OuterDIV = MainScreen();
  return OuterDIV;
};
