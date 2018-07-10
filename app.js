// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done.

const first = new Hangman('Car parts', 3)

first.getPuzzle()

const _keyPress = (e) => {
  const guess = String.fromCharCode(e.charCode)
  first.makeGuess(guess)
}

window.addEventListener('keypress', _keyPress)


// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('an error has taken place')
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()


// api for countries

const url = 'http://restcountries.eu/rest/v2/all'
const countryCode = "US"
const usa = new XMLHttpRequest()

usa.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const countries = JSON.parse(e.target.responseText)

    const myCountry = countries.find((country => country.alpha2Code === countryCode))
    console.log('myCountry: ', myCountry.name)

  } else if (e.target.readyState === 4) {
    console.log('An error has occured.')
  }
})

usa.open('GET', url)
usa.send()
