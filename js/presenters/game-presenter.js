import GenreView from "../views/genre-view";
import ArtistView from "../views/artist-view";
import HeaderView from "../views/header-v";

const Titles = {
  JAZZ: `джазз`,
  ROCK: `рок`,
  COUNTRY: `кантри`,
  RNB: `R&B`,
  POP: `поп`,
  ELECTRONIC: `электроник`
};

const GameView = {
  artist: ArtistView,
  genre: GenreView
};

export default class GameScreenPresenter {
  constructor(model) {
    this.model = model;
    this.state = this.model.state;
    this.level = this.state.levels[this.state.level];
    this.header = new HeaderView(this.level);
    this.content = new GameView[this.level.type](this.level);

    this.root = document.createElement(`section`);
    this.root.classList.add(`game game--${this.model.state.level.type}`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
  }

  startGame() {
    // this.changeLevel();
  }

  answer(answer) {
    // обработка ответа пользователя
  }

  fail(state) {
    // проигрыш игрока
  }

  updateContent() {
    const content = new
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();

    const level = new GameView[this.level.type](this.model.level);
    // level.onAnswer = this.answer.bind(this);
    // this.changeContentView(level);
    // level.focus();
  }


  restart() {
    // возврат на экран приветствия
  }
}
