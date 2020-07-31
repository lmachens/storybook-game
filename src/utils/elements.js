export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  Object.assign(element, props);
  return element;
};

export const generateRandomNumber = (upperLimit) => {
  let randomNumber = Math.floor(Math.random() * upperLimit) + 1;
  return randomNumber;
}
