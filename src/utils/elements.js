export const createElement = (tagName, props, children = []) => {
  const element = document.createElement(tagName);
  Object.assign(element, props);
  children.forEach((child) => {
      element.append(child);
    });
  return element;
};