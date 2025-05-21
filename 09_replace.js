function fixTypo(emailList) {
  return emailList
    .split(", ")
    .map(mail => mail.replace("@pgn.com", "@atn.com"));
}
