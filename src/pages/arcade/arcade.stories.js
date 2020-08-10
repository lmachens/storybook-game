import "./arcade.css";
import { createArcade } from "./arcade";

export default { title: "Pages/Arcade" };

export const basic = () => {
  const arcade = createArcade();

  return arcade;
};
