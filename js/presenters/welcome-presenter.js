import WelcomeView from "../views/welcome-view";

const RULES = [`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`, `ТЕСТ`];

export default class WelcomePresenter {
  constructor(showGame) {
    this._welcomeView = new WelcomeView(RULES);
    this._welcomeView.onWelcomeButtonClick = showGame;
    this.element = this._welcomeView.element;
  }
}
