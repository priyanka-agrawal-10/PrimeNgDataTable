import { PrimeGridPage } from './app.po';

describe('prime-grid App', () => {
  let page: PrimeGridPage;

  beforeEach(() => {
    page = new PrimeGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
