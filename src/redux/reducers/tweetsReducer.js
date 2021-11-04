function tweetsReducer(tweets = [], action) {
  switch (action.type) {
    case "ADD_TWEETS":
      return [...action.payload];

    case "DELETE_TWEET":
      return tweets;

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
    /* 
      return lists.map((list) => {
        if (list.id !== action.payload.listId) return list;
        return {
          ...list,
          items: list.items.filter((item) => item.name !== action.payload.itemName),
        };
      }); */

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
