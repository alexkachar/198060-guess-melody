import {renderScreen} from "../utils";
import WelcomePresenter from "../presenters/welcome-presenter";
import GamePresenter from "../presenters/game-presenter";
import GameModel from "../models/game-model";

export default class Application {

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(Application.showGameScreen);
    renderScreen(welcomePresenter.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel();
    const gamePresenter = new GamePresenter(gameModel);
    gamePresenter.showWelcome = Application.showWelcomeScreen;
    // gamePresenter.showResults = Application.showResultsScreen;
    renderScreen(GamePresenter.element);
    gamePresenter.startGame();
  }

  static showResultsScreen() {

  }
}
