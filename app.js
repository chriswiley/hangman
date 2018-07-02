// Primative value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer'
// console.log(product)

// const otherProduct = new String('Phone')
// console.log(otherProduct)



const first = new Hangman('Cat', 3)
first.getPuzzle()
window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  first.makeGuess(guess)
  // console.log(guess)
})