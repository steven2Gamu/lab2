const add = function (a, b) {
  return a + b
}

const result = add(2, 3)
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4))
