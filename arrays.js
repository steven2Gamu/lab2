'use strict'

let numbers = [76, 66.7, 89, 37.5, 61]
numbers.push(19) // 76, 66.7, 89, 37.5, 61, 19
numbers.unshift(61) // 61, 76, 66.7, 89, 37.5, 61, 19
numbers[1] = 12 // 61, 12, 66.7, 89, 37.5, 61, 19
numbers.splice(3, 1, 99, 100)

console.log(numbers)
console.log(numbers[7])
numbers = numbers + 1