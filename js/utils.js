const mainElement = document.querySelector(`.main`);

const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;
  return wrapper.children[0];
};

const renderScreen = (gameScreen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(gameScreen);
};

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomValueFromArray = (array) => {
  return array[getRandomValue(0, array.length - 1)];
};

export {getElementFromTemplate, renderScreen, getRandomValueFromArray};