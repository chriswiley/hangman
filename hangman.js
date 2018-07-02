const wrapper = document.querySelector('#wrapper')
const puzzleHTML = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#guesses-remaining')
const wrongGuess = document.querySelector('#wrong-guess')


const Hangman = function (wordToGuess, numberOfGuesses) {
  this.wordToGuess = wordToGuess.toLowerCase().split('')
  // this.wordToGuess = Array.of(wordToGuess.toLowerCase())
  this.numberOfGuesses = numberOfGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  wrongGuess.innerHTML = ''
  let build = '<h2>'
  const guessedLettersLowerCase = this.guessedLetters.map((letter) => letter.toLowerCase())

  this.wordToGuess.forEach((puzzle) => {
    if (guessedLettersLowerCase.includes(puzzle) || puzzle === ' ') {

      build += `${puzzle}`
    } else {
      build += `*`
    }
  })
  build += `</h2>`
  guessesLeft.innerHTML = `<p style="color:${this.numberOfGuesses > 1 ? 'blue' : 'red'}; ${this.numberOfGuesses <= 1 ? 'font-size:2em' : ''}">You have ${this.numberOfGuesses} guess${this.numberOfGuesses === 1 ? '' : 'es'} remaining</p>`
  return puzzleHTML.innerHTML = build
}

Hangman.prototype.makeGuess = function () {
  const alreadyGuessed = `<p style="color:red;font-size:3em">You have already guessed that letter. Try again.</p>`
  // console.log('starting guesses: ', this.numberOfGuesses)
  const guesses = Array.from(arguments)
  guesses.forEach(guess => {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.wordToGuess.includes(guess)
    const isGoodGuess = this.wordToGuess.includes(guess)
    if (isUnique && isBadGuess) {
      this.guessedLetters.push(guess)
      this.numberOfGuesses--
      puzzleHTML.innerHTML = this.getPuzzle()
    } else if (isUnique && isGoodGuess) {
      this.guessedLetters.push(guess)
      puzzleHTML.innerHTML = this.getPuzzle()
    } else {
      puzzleHTML.innerHTML = this.getPuzzle()
      wrongGuess.innerHTML = alreadyGuessed
    }
  })
}
