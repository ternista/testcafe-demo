import { Selector, t } from 'testcafe';

class ResultPage {
    get title() { return Selector("h1[data-test='page-title']"); }
    get resultsCount() { return Selector("p[data-test='number-of-articles']"); }
  }

export default new ResultPage();