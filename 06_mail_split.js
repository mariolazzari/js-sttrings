function splitEmails(emailList) {
  return emailList
    .toString()
    .split(",")
    .map(email => email.trim());
}
