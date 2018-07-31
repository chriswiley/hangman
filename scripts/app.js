const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1



window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = () => {
  let puzzleHTML
  puzzleEl.innerHTML = ''
  guessesEl.textContent = game1.statusMessage

  puzzleHTML = game1.puzzle.split('').map((letter => `<span>${letter}</span>`))
  puzzleEl.innerHTML = puzzleHTML.join('')
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })


// getLocation().then((location) => {
//   console.log(`You are located at ${location.city}, ${location.region} in the ${location.country}.`)
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(` Which is the ${country.name}`)
// }).catch((err) => console.log(`Error: ${err}`))



// getCountry('us').then((country) => {
            //   console.log(country.name)
            // }).catch((err) => {
            //   console.log(`Error: ${err}`)
            // })

            // fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
            //   if (response.status === 200) {
            //     return response.json()
            //   } else {
            //     throw new Error('Unable to fetch the puzzle')
            //   }
            // }).then((data) => {
            //   console.log(data.puzzle)
            // }).catch((error) => {
            //   console.log(error)
            // })
// getLocation().then((location) => {
//   console.log(`You are located at ${location.city}, ${location.region} in the ${location.country}.`)
// }).catch((err) => console.log(`Error: ${err}`))