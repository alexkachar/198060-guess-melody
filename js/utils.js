const mainElement = document.querySelector(`.main`);

const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper.children[0];
};

const renderScreen = (gameScreen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(gameScreen);
};

export {getElementFromTemplate, renderScreen};
