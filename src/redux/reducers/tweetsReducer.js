function tweetsReducer(tweets = [], action) {
  switch (action.type) {
    case "ADD_TWEET":
      return tweets;

    case "DELETE_TWEET":
      return tweets;

    case "LIKE_TWEET":
      return tweets;

    case "UNLIKE_TWEET":
      return tweets;

    default:
      return tweets;
  }
}

export default tweetsReducer;
