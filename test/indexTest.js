const expect = chai.expect;

describe('index.js', function () {
  it('must locate div#hidden-div and update its innerText from 300 to 301', function () {
    expect(document.querySelector("div#hidden-div").innerText).to.equal('301');
  });
});
