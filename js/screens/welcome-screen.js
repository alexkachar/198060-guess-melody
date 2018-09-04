import {initialGameState} from "../data/data";
import {changeScreen} from "./change-screen";
import WelcomeView from "../views/welcome-view";

const RULES = [`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`, `ТЕСТ`];

export const welcomeScreen = new WelcomeView(RULES);
welcomeScreen.onWelcomeButtonClick = () => {
  let state = Object.assign({}, initialGameState);
  changeScreen(state);
};

