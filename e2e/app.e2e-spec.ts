import { TestEdvisorsPage } from './app.po';

describe('test-edvisors App', () => {
  let page: TestEdvisorsPage;

  beforeEach(() => {
    page = new TestEdvisorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
