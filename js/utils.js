const mainElement = document.querySelector(`.main`);

export const renderScreen = (gameScreen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(gameScreen);
};

export const getFormatedTime = (initTime) => {
  const minutes = Math.floor(initTime / 60);
  const seconds = initTime - minutes * 60;
  const time = {
    minutes,
    seconds
  };

  if (time.seconds < 10) {
    time.seconds = `0` + time.seconds;
  }

  return time;
};
