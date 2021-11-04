function tweetsReducer(tweets = [], action) {
  switch (action.type) {
    case "ADD_TWEETS":
      return [...action.payload];

    case "DELETE_TWEET":
      return tweets;

    case "LIKE_TWEET":
      return tweets;

    case "UNLIKE_TWEET":
      return tweets;
    case "ADD_NEW_TWEET":
      return [...action.payload, ...tweets];

    case "REMOVE_TOKEN":
      return [];

    default:
      return tweets;
  }
}

export default tweetsReducer;
