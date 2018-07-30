
const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}
const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error(`Unable to fetch puzzle`)
    }
  }).then((data) => {
    return data.puzzle
  })
}


const getCountry = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error(`Unable to get country`)
    }
  }).then((country) => country.find((country) => country.alpha2Code === countryCode.toUpperCase())
  )
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest()

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText)
//       const country = data.find((country) => country.alpha2Code === countryCode.toUpperCase())
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('Dude! Something is wrong!!')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send()
// })

const getLocation = () => {
  return fetch(`http://ipinfo.io/json?token=eb4a926492b116`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error(`Could not fetch data`)
    }
  })
}