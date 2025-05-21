# JavaScript Practice: String Manipulation

## Determine password length

```js
const success = "Success";
const needLongerPassword = "Password should be at least 8 characters";

function findPasswordLength(password) {
  if (password.toString().length < 8) {
    return needLongerPassword;
  }
  return success;
}
```

## Trim a user's new password

```js
function trimPasswordString(generatedPassword) {
  return generatedPassword.toString().trim();
}
```