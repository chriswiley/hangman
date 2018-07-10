const wrapper = document.querySelector('#wrapper')
const puzzleHTML = document.querySelector('#puzzle')
const guessesLeft = document.querySelector('#guesses-remaining')
const wrongGuess = document.querySelector('#wrong-guess')

// class
class Hangman {
  constructor(wordToGuess, numberOfGuesses) {
    this.wordToGuess = wordToGuess.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.status = 'playing'
    this.guessedLetters = []
    this.wordToGuess.forEach(letter => {
      if (letter === ' ') {
        this.guessedLetters.push(letter)
      }
    })
  }
  getPuzzle() {
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
    console.log('here: ', this.guessedLetters)
    guessesLeft.innerHTML = `<p style="color:${this.numberOfGuesses > 1 ? 'blue' : 'red'}; ${this.numberOfGuesses <= 1 ? 'font-size:2em' : ''}">You have ${this.numberOfGuesses} guess${this.numberOfGuesses === 1 ? '' : 'es'} remaining</p>`

    this.gameStatus()
    return puzzleHTML.innerHTML = build
  }
  makeGuess() {
    const alreadyGuessed = `<p style="color:red;font-size:3em">You have already guessed that letter. Try again.</p>`
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
  gameStatus() {
    const finalGuess = []

    if (this.numberOfGuesses === 0) {
      this.status = 'Failed'
      console.log(this.status)
      window.removeEventListener('keypress', _keyPress)
      return guessesLeft.innerHTML = `<p style="color:red;font-size:3em">You have lost the game!</p>
        <p style="color:blue;font-size:2em">The word was "${this.wordToGuess.join('')}"`
    }

    this.wordToGuess.forEach((a) => this.guessedLetters.forEach((b) => {
      if (a === b) {
        finalGuess.push(a)
      }
    }))

    if (finalGuess.join('') === this.wordToGuess.join('')) {
      guessesLeft.innerHTML = `<p style="color:green; font-size:3em;">You Won the Game!!!!</p>`
      this.status = 'finished'
      window.removeEventListener('keypress', _keyPress)
    }
    console.log(this.status)
  }

}