/* eslint-disable linebreak-style */
class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date(),
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState() {
    return this.data;
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  };

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    }
    this.notifySubscribers();
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm,
    });
  };

  startClock = () => {
    setInterval(()=>{
      this.mergeWithState({
        timestamp : new Date(),
      });
    },1000);
  }
}

export default StateApi;
