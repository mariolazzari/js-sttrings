const valid = "Valid Phone Number";
const invalid = "Invalid Phone Number";

function isPhoneNumberValid(phoneNumber) {
  if (phoneNumber.toString().trim().startsWith("1-")) {
    return valid;
  }
  return invalid;
}
