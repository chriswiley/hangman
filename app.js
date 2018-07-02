const first = new Hangman('Cat', 3)
first.getPuzzle()
window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  first.makeGuess(guess)
  // console.log(guess)
})