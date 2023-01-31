import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from '../components/ArticleList';
import DataApi from '../DataApi';
import axios from 'axios';

class App extends React.Component {

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  }

  async componentDidMount() {
    const rawData = await axios.get('/data');
    const api = new DataApi(rawData.data);

    this.setState((prevState) => {
      return {
        articles: api.getArticles(),
        authors: api.getAuthors(),
      };
    });
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
    <App initialData={window.initialData} />,
    document.getElementById('root')
  );
}

