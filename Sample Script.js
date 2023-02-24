function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = generateRandomNumber(1, 10);
console.log("Your random number is: " + randomNumber);
