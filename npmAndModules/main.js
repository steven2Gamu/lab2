'use strict'
// console.log('Loading a module')
// const mod = require('./mod')
// console.log('Mod:', mod)
// console.log('Done')

const fs = require('fs')
fs.readFile('../ELEN4010.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// Do the challenge