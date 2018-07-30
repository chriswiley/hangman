const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})


getLocation().then((location) => {
  console.log(`You are located at ${location.city}, ${location.region} in the ${location.country}.`)
  return getCountry(location.country)
}).then((country) => {
  console.log(` Which is the ${country.name}`)
}).catch((err) => console.log(`Error: ${err}`))



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