'use strict'

const students = [

  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },

  {
    name: 'Pieter',
    studentNumber: 453545,
    yearOfStudy: 4
  },

  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },

  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const deleteStudent = function (theStudent, studentArray) {
  let pos
  if (studentArray.findIndex(function (element) {
    return element.name === theStudent.name && element.studentNumber === theStudent.studentNumber && element.yearOfStudy === theStudent.yearOfStudy
  })) {
    pos = studentArray.indexOf(theStudent)
    studentArray.splice(pos, 1)
  }
  return studentArray
}

console.log(students)

const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}, students)

console.log(modifiedArray)
