import AbstractView from '../views/abstract-view';

export default class ErrorPresenter extends AbstractView {
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
