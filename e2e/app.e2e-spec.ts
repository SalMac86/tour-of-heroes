import { HeroDirPage } from './app.po';

describe('hero-dir App', () => {
  let page: HeroDirPage;

  beforeEach(() => {
    page = new HeroDirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
