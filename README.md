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

## Check phone number format

```js
const valid = "Valid Phone Number";
const invalid = "Invalid Phone Number";

function isPhoneNumberValid(phoneNumber) {
  if (phoneNumber.toString().trim().startsWith("1-")) {
    return valid;
  }
  return invalid;
}
```