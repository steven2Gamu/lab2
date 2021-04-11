'use strict'
const numbers = [1, 4, 5, 6, 7, 3]
for (let index = 0; index !== numbers.length; index++) {
  console.log(numbers[index])
}

//  using the callback and the current element being processed
numbers.forEach(function (element) {
  console.log(element)
})

// with the optional index of the currentValue in the array
// numbers.forEach(function (element, 3) {
//   console.log(element)
// })
