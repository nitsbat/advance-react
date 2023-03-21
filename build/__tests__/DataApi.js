'use strict';

var _StateApi = require('../StateApi');

var _StateApi2 = _interopRequireDefault(_StateApi);

var _testData = require('../testData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = new _StateApi2.default(_testData.data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = store.getState().articles;
    const articleId = _testData.data.articles[0].id;
    const articleTitle = _testData.data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = store.getState().authors;
    const authorId = _testData.data.authors[0].id;
    const authorFirstName = _testData.data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});