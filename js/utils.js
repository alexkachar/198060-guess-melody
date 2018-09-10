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

// export const changeLevel = (game, level) => {
//   if (typeof level !== `number`) {
//     throw new Error(`Level should be of type number`);
//   }
//
//   if (level < 0) {
//     throw new Error(`Level should not be negative value`);
//   }
//
//   return Object.assign({}, game, {
//     level
//   });
// };

export {getElementFromTemplate, renderScreen};
