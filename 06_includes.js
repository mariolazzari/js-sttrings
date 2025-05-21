const positive = "positive";
const negative = "negative";

function hasFun(message) {
  if (message.toString().includes("fun")) {
    return positive.toUpperCase();
  }
  return negative.toUpperCase();
}
