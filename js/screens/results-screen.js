import ResultsView from "../views/result-view";

const resultScreen = (state) => {
  const resultsView = new ResultsView(state);
  return resultsView.element;
};

export {resultScreen};
