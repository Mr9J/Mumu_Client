export function GetToken() {
  const userString = localStorage.getItem("currentUser");
  const userObj = JSON.parse(userString!);
  const token = userObj.token;
  return token;
}
