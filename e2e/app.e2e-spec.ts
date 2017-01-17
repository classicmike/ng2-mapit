import { Ng2MapitPage } from './app.po';

describe('ng2-mapit App', function() {
  let page: Ng2MapitPage;

  beforeEach(() => {
    page = new Ng2MapitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
