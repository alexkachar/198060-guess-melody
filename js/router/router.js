import {renderScreen} from "../utils";
import WelcomePresenter from "../presenters/welcome-presenter";
import GamePresenter from "../presenters/game-presenter";
import GameModel from "../models/game-model";

export default class Router {

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(Router.showGameScreen);
    renderScreen(welcomePresenter.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel();
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = Router.showWelcomeScreen;
    // gamePresenter.showResults = Router.showResultsScreen;
    renderScreen(GamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen() {

  }
}