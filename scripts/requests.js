
const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }
}

const getCountry = async (countryCode) => {
  const response = await fetch(`http://restcountries.eu/rest/v2/all`)

  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode.toUpperCase())
  } else {
    throw new Error('Unable to get country')
  }

}

const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/json?token=eb4a926492b116`)

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Could not fetch data')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  return getCountry(location.country)
}

// const getLocationOldie = () => {
//   return fetch(`http://ipinfo.io/json?token=eb4a926492b116`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error(`Could not fetch data`)
//     }
//   })
// }

// const getCountryoldie = (countryCode) => {
//   return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error(`Unable to get country`)
//     }
//   }).then((data) => data.find((country) => country.alpha2Code === countryCode.toUpperCase())
//   )
// }

// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error(`Unable to fetch puzzle`)
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }
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