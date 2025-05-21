const success = "Success";
const needLongerPassword = "Password should be at least 8 characters";

function findPasswordLength(password) {
  if (password.toString().length < 8) {
    return needLongerPassword;
  }
  return success;
}
