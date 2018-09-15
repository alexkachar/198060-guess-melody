import GenreView from "../views/genre-view";
import ArtistView from "../views/artist-view";
import HeaderView from "../views/header-view";

const LevelTypes = {
  ARTIST: `artist`,
  GENRE: `genre`
};

const GameView = {
  [LevelTypes.ARTIST]: ArtistView,
  [LevelTypes.GENRE]: GenreView
};

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.levelType = this.model._state.levels[this.model._state.level].type;
    this.header = new HeaderView(this.model._state);
    this.content = new GameView[this.levelType](this.model.getCurrentLevel());

    this._interval = null;
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
    const hasNextLevel = this.model.hasNextLevel();
    if (hasNextLevel) {
      this.changeContentView();
    } else {
      clearInterval(this._interval);
      this.showResults(this.model);
    }
  }

  changeContentView() {
    const level = this.model.getCurrentLevel();
    const levelType = this.model.getLevelType();
    const view = new GameView[levelType](level);
    view.onAnswerClick = this.onAnswerClick.bind(this);
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  startGame() {
    this.model.resetState();
    this.changeLevel();
    this._interval = setInterval(() => {
      const hasNextLevel = this.model.hasNextLevel();
      if (hasNextLevel) {
        this.model.tick();
        this.changeHeaderView();
      } else {
        this.changeLevel();
      }
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

  changeHeaderView() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    header.onBackButtonClick = () => this.showWelcome();
  }
}
