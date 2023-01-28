import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './ArticleList';
import DataApi from '../DataApi';
import { data } from '../testdata.json';

const api = new DataApi(data);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return <ArticleList
      articles={this.state.articles}
      articleActions={this.articleActions}
    />;
  }
}

export default App;

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

