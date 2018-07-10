const first = new Hangman('Car parts', 3)

first.getPuzzle()

const _keyPress = function (e) {
  const guess = String.fromCharCode(e.charCode)
  first.makeGuess(guess)
}

window.addEventListener('keypress', _keyPress)