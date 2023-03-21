import React from "react";
import debounce from "lodash.debounce";
import storeProvider from "./storeProvider";

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: "",
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  // This is regarding the component performance. we can alter the below methods to save unnecessary rendering the same we can do making it a pure component.
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('component update');
  // }

  render() {
    return (
      <input
        type="search"
        placeholder="Enter Search Term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}

export default storeProvider()(SearchBar);
