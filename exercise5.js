'use strict'
let course = function (name, courseCode) {
  this.name = name,
    this.courseCode = courseCode,
    getSummary = function{
//
    }
}

let course1 = new course('Software Dev 3', 'ELEN4010')
let course2 = new course('Measurements', 'ELEN4006A')
let course3 = new course('Economics', 'ELEN3018')

const study = function (theCourse) {
  let year = 0
  if (theCourse.courseCode.includes('ELEN40')) year = 4
  else if (theCourse.courseCode.includes('ELEN30')) year = 3
  else if (theCourse.courseCode.includes('ELEN20')) year = 2
  else if (theCourse.courseCode.includes('ELEN10')) year = 1
  theCourse.year = year
}

const summary = function (theCourse) {
  return `${theCourse.courseCode} is offered in the year ${theCourse.year} .`
}

study(course1)
console.log(course1)
console.log(summary(course1))

study(course2)
console.log(course2)
console.log(summary(course2))

study(course3)
console.log(course3)
console.log(summary(course3))
