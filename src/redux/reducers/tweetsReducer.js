function tweetsReducer(tweets = [], action) {
  switch (action.type) {
    case "ADD_TWEET":
      return tweets;

    case "DELETE_TWEET":
      return tweets;

    default:
      return tweets;
  }
}

export default tweetsReducer;
