export const selectUser = (user) => {
  console.log("Hey you hit on" + user.title);
  return {
    type:'USER_SELECTED',
    payload:user
  }
};