import React from "react";
import storeProvider from "./storeProvider";

class Timestamp extends React.Component {

  timeDisplay = timeStamp =>
    timeStamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.timeDisplay(this.props.timestamp) !==
      this.timeDisplay(nextProps.timestamp));
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Timstamp Updates');
  }

  render() {
    return <div>
      {this.timeDisplay(this.props.timestamp)}
    </div>
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);
