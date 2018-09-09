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
    console.log(this.root);
  }

  get element() {
    return this.root;
  }

  changeLevel() {
    const level = this.model.getCurrentLevel();
    const content = new GameView[this.levelType](level);
    content.onAnswerClick = this.onAnswerClick.bind(this);
    this.changeContentView(content);
  }

  startGame() {
    this.changeLevel();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
  }

  onAnswerClick(userAnswers) {
    // let isCorrect = userAnswers;
    // if (this.levelType === `genre`) {
    //   isCorrect = Array.from(userAnswers).every((element) => {
    //     const checked = element.checked;
    //     const correct = element.value === `true`;
    //
    //     return checked === correct;
    //   });
    // }
    //
    // let newState;
    // const answer = {isCorrect, time: 25};
    // if (isCorrect) {
    //   newState = Object.assign({}, this.state, {level: this.state.level + 1, answers: this.state.answers.concat(answer)});
    // } else {
    //   newState = Object.assign({}, this.state, {notes: this.state.notes - 1, level: this.state.level + 1, answers: this.state.answers.concat(answer)});
    // }
    // changeScreen(newState);
  }

  changeContentView(view) {
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
