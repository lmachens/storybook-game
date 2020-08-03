import { createElement } from "../../utils/elements";

export const createMain = (children = []) => {
  const main = createElement("main", { className: "main" }, children);
  return main;
};
