function userReducer(user = [], action) {
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

    default:
      return user;
  }
}

export default userReducer;
