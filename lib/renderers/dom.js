import pickBy from "lodash.pickby";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "../components/ArticleList";
import SearchBar from "../components/SearchBar";
import Timestamp from "../components/Timestamp";
import StateApi from "../StateApi";

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  state = this.props.store.getState();
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };
  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, "i");
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;

if (typeof window !== 'undefined') {
  const store = new StateApi(window.initialData);
  console.log(<App></App>);
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}
