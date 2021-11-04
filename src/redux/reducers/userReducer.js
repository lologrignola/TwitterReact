function userReducer(user = {}, action) {
  switch (action.type) {
    case "ADD_USER":
      return user;

    case "DELETE_USER":
      return user;

    case "EDIT_USER":
      return user;

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
