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

  render() {
    return <ArticleList
      articles={this.state.articles}
      authors={this.state.authors}
    />;
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
