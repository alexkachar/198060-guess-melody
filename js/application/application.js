import {renderScreen} from "../utils";
import WelcomePresenter from "../presenters/welcome-presenter";

export default class Application {

  static showWelcomeScreen() {
    const welcomePresenter = new WelcomePresenter(Application.showGameScreen);
    renderScreen(welcomePresenter.element);
  }

  static showGameScreen() {
    const gameModel = new GameModel();
    const gamePresenter = new GamePresenter(gameModel);
    // gamePage.showResults = Application.showResults;
    gamePage.showWelcome = Application.showWelcomeScreen;
    renderScreen(gamePage.element);
    gamePage.startGame();
    console.log(`show game screen`);
  }
}
