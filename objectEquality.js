'use strict'

const numbers = [76, 55.7, 89, 37.5, 61]
console.log(numbers.indexOf(89))
console.log(numbers.indexOf(234))

const electives = [
  {
    courseCode: 'ELEN4010',
    yearOffered: 4
  },
  {
    courseCode: 'ELEN4001',
    yearOffered: 4
  },
  {
    courseCode: 'ELEN4020',
    yearOffered: 4
  }
]

console.log(electives.indexOf({ courseCode: 'ELEN4001', yearOffered: 4 }) + ' used indexOf')

console.log(electives.findIndex(function (element) {
  return element.courseCode === 'ELEN4001' && element.yearOffered === 4
}))
