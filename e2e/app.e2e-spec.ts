import { ReservarPage } from './app.po';

describe('reservar App', () => {
  let page: ReservarPage;

  beforeEach(() => {
    page = new ReservarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
