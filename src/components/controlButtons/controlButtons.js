import { createElement } from "../../utils/elements";

export const ControlButtons = () => {
  const OuterDIV = createElement("div", {
    className: "nokiaControlButtons",
  });

  const numbersFirstRow = [{ name: "1" }, { name: "2" }, { name: "3" }];
  const numbersSecondRow = [{ name: "4" }, { name: "5" }, { name: "6" }];
  const numbersThirdRow = [{ name: "7" }, { name: "8" }, { name: "9" }];
  const numbersFourthRow = [{ name: "*" }, { name: "0" }, { name: "#" }];

  const firstRow = createElement("div");
  const secondRow = createElement("div");
  const thirdRow = createElement("div");
  const fourthRow = createElement("div");

  numbersFirstRow.forEach((buttons) => {
    const buttonsbtn = createElement("button", {
      innerText: buttons.name,
    });
    firstRow.append(buttonsbtn);
  });

  numbersSecondRow.forEach((buttons) => {
    const buttonsbtn2 = createElement("button", {
      innerText: buttons.name,
    });
    secondRow.append(buttonsbtn2);
  });

  numbersThirdRow.forEach((buttons) => {
    const buttonsbtn3 = createElement("button", {
      innerText: buttons.name,
    });
    thirdRow.append(buttonsbtn3);
  });

  numbersFourthRow.forEach((buttons) => {
    const buttonsbtn4 = createElement("button", {
      innerText: buttons.name,
    });
    fourthRow.append(buttonsbtn4);
  });

  OuterDIV.append(firstRow);
  OuterDIV.append(secondRow);
  OuterDIV.append(thirdRow);
  OuterDIV.append(fourthRow);

  return OuterDIV;
};
