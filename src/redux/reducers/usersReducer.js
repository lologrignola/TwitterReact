function usersReducer(users = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return users;

    case "DELETE_USER":
      return users;

    default:
      return users;
  }
}

export default usersReducer;
