'use strict'

const account = {

  accountHolder: null,
  withdrawal: 0,
  deposits: 0,

  deposit: function (deposits) {
    this.deposits += deposits
  },

  withdraw: function (withdrawal) {
    this.withdrawal += withdrawal
  },

  balance: function () {
    return this.deposits - this.withdrawal
  },

  summary: function () {
    return `This account has a balance of R ${this.balance()}.There have been deposits totalling R ${this.deposits} and withdrawals totalling R ${this.withdrawal}.`
  }
}

account.deposit(100)
console.log(account.balance())
account.withdraw(20)
console.log(account.balance())
console.log(account.summary())
