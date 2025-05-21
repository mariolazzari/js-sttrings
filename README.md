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

### Transform user input to lowercase

```js
function transformCityToLowerCase(city) {
  return city.toString().toLowerCase();
}
```

### Display a page heading in uppercase

```js
function transformPageHeading(heading) {
  return heading.toString().toUpperCase();
}
```

### Does the message include "fun"?

```js
const positive = "positive";
const negative = "negative";

function hasFun(message) {
  if (message.toString().includes("fun")) {
    return positive.toUpperCase();
  }
  return negative.toUpperCase();
}
```

## Split your email list

```js
function splitEmails(emailList) {
  return emailList
    .toString()
    .split(",")
    .map(email => email.trim());
}
```

## Slice your account number display

```js
function getAccountNumberLastFour(accountNumber) {
  return accountNumber.toString().slice(-4);
}
```

## Replace the typo

```js
function fixTypo(emailList) {
  return emailList
    .split(", ")
    .map(mail => mail.replace("@pgn.com", "@atn.com"));
}
```