import { createElement } from "../../utils/elements";

export const MainScreen = () => {
  const OuterDIV = createElement("div", {
    className: "nokiaScreen",
  });

  const logoDiv = createElement("div", {
    innerText: "neue fische",
  });

  OuterDIV.append(logoDiv);

  return OuterDIV;
};
