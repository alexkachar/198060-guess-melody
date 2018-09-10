import GenreView from "../views/genre-view";
import ArtistView from "../views/artist-view";
import HeaderView from "../views/header-view";

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

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.state = this.model.state;
    this.levelType = this.model.state.levels[this.model.state.level].type;
    this.header = new HeaderView(this.model.state);
    this.content = new GameView[this.levelType](this.model.state);

    this.root = document.createElement(`section`);
    this.root.classList.add(`game`);
    this.root.classList.add(`game--${this.levelType}`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
  }

  get element() {
    return this.root;
  }

  changeLevel() {
    const level = this.model.getCurrentLevel();
    const content = new GameView[this.levelType](level);
    content.onAnswerClick = this.onAnswerClick.bind(this);
    const hasNextLevel = this.model.hasNextLevel();
    this.changeContentView(content);
    // сделать проверку на наличие следующего уровня и выводить результаты, если нет уровня
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  onAnswerClick(userAnswers) {
    let isCorrect = userAnswers;
    if (this.levelType === `genre`) {
      isCorrect = Array.from(userAnswers).every((element) => {
        const checked = element.checked;
        const correct = element.value === `true`;
        return checked === correct;
      });
    }

    this.model.answer(isCorrect);
    this.changeLevel();
  }

  changeContentView() {
    const level = this.model.getCurrentLevel();
    const view = new GameView[this.levelType](level);
    view.onAnswerClick = this.onAnswerClick.bind(this);
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  changeHeaderView() {}

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }
}
