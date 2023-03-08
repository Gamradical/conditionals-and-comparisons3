var piecesOfChocolate = Number(
  prompt("How many pieces of chocolate would you like? (0-10)")
);
var chocolatesLeft = 10 - piecesOfChocolate;

if (chocolatesLeft === 10) {
  alert("No chocolate for you?");
} else if (chocolatesLeft >= 6) {
  alert(`There are ${chocolatesLeft} pieces of chocolate left.`);
} else if (chocolatesLeft >= 1) {
  alert(`Wow! You really like chocolate. There's only ${chocolatesLeft} left!`);
} else {
  alert("You ate all the chocolate! Delicious!");
}
