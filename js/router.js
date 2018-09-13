import {renderScreen} from "./utils";
import GameModel from "./game-model";
import WelcomePresenter from "./presenters/welcome-presenter";
import GamePresenter from "./presenters/game-presenter";
import ResultsPresenter from "./presenters/results-presenter";
import ErrorPresenter from "./presenters/error-presenter";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData = [];

export default class Router {

  static start() {
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => gameData = data).
      then((response) => Router.showWelcomeScreen()).
      catch(Router.showErrorScreen);
  }

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(Router.showGameScreen);
    renderScreen(welcomePresenter.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel(gameData);
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = Router.showWelcomeScreen;
    gamePresenter.showResults = Router.showResultsScreen;
    renderScreen(gamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen(model) {
    const resultsPresenter = new ResultsPresenter(model, Router.showGameScreen);
    renderScreen(resultsPresenter.element);
  }

  static showErrorScreen(error) {
    const errorPresenter = new ErrorPresenter(error);
    renderScreen(errorPresenter.element);
  }
}
