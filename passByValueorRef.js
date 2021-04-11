'use strict'

const student = {
  name: 'Kwezi',
  studentNumber: 453528,

  getSummary: function () {
    return `$(this.name}'s student number is ${this.studentNumber}`
  }
}

const setStudentToEmptyObject = function (theStudent) {
  theStudent = {}
}

setStudentToEmptyObject(student)

console.log(student.name)
