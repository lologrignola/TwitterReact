function userReducer(user = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      return user;

    case "ADD_NEW_FOLLOWING":
      return { ...user, following: [...user.following, action.payload] };

    case "DELETE_FOLLOWING":
      return { ...user, following: user.following.filter((user) => user !== action.payload) };

    case "FOLLOW_USER":
      return user;

    case "UNFOLLOW_USER":
      return user;

    case "ADD_TOKEN":
      return {
        ...user,
        token: action.payload.token,
        id: action.payload.id,
        following: action.payload.following,
      };

    case "REMOVE_TOKEN":
      return {};

    default:
      return user;
  }
}

export default userReducer;
