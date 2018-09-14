import {renderScreen} from "./utils";
import GameModel from "./game-model";
import GamePresenter from "./presenters/game-presenter";
import ResultsView from "./views/results-view";
import ErrorView from "./views/error-view";
import {adaptServerData} from "./data/data-adaptor.js";
import WelcomeView from "./views/welcome-view";
import {checkStatus} from "./utils";

let questions = [];

export default class Router {

  static start() {
    window.fetch(`https://es.dump.academy/guess-melody/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => {
        questions = adaptServerData(data);
      }).
      then(Router.showWelcomeScreen).
      catch(Router.showErrorScreen);
  }

  static showWelcomeScreen() {
    const welcomeView = new WelcomeView();
    welcomeView.onWelcomeButtonClick = Router.showGameScreen;
    renderScreen(welcomeView.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel(questions);
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = Router.showWelcomeScreen;
    gamePresenter.showResults = Router.showResultsScreen;
    renderScreen(gamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen(model) {
    const resultsView = new ResultsView(model);
    resultsView.onReplayClick = Router.showGameScreen;
    renderScreen(resultsView.element);
  }

  static showErrorScreen(error) {
    const errorView = new ErrorView(error);
    renderScreen(errorView.element);
  }
}
