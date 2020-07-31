import "./arcadeScreen.css";
import { createArcadeScreen } from "./arcadeScreen";

export default { title: "Pages/arcadeScreen" };

export const basic = () => {
  const arcadeScreen = createArcadeScreen();

  return arcadeScreen;
};
