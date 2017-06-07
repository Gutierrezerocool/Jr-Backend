import { BackendJrPage } from './app.po';

describe('backend-jr App', () => {
  let page: BackendJrPage;

  beforeEach(() => {
    page = new BackendJrPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
