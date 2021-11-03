function jwtReducer(token = "", action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return action.payload;

    case "DELETE_TOKEN":
      return "";

    default:
      return token;
  }
}

export default jwtReducer;
