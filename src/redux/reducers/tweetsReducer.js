function tweetsReducer(tweets = [], action) {
  switch (action.type) {
    case "ADD_TWEETS":
      return [...action.payload];

    case "DELETE_TWEET":
      return tweets.filter((tweet) => tweet._id !== action.payload);

    case "ADD_NEW_LIKED":
      return tweets.map((tweet) => {
        if (tweet._id !== action.payload.tweetId) return tweet;
        return {
          ...tweet,
          likes: [...tweet.likes, action.payload.userId],
        };
      });

    case "DELETE_LIKED":
      return tweets.map((tweet) => {
        if (tweet._id !== action.payload.tweetId) return tweet;
        return {
          ...tweet,
          likes: tweet.likes.filter((like) => like !== action.payload.userId),
        };
      });

    case "ADD_NEW_TWEET":
      return [...action.payload, ...tweets];

    case "REMOVE_TOKEN":
      return [];

    case "ADD_MORE_TWEETS":
      return [...tweets, ...action.payload];

    default:
      return tweets;
  }
}

export default tweetsReducer;
