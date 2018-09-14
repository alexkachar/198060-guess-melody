import AbstractView from './abstract-view';

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this._error = error;
  }

  get template() {
    return `
      <section class="modal">
        <h2 class="modal__title">Произошла ошибка!</h2>
        <p class="modal__text">${this._error.message}</p>
      </section>`;
  }
}
