function Account() {
  this.transactions = []
  this.balance = 0
 }

 Account.prototype.printStatement = function () {
   output = "date || credit || debit || balance"
   this.transactions.reverse().forEach( function(transaction) {
     output += "\n" + transaction
   });
   return output
 };

 Account.prototype.deposit = function (date, amount) {
   this.balance += amount
   this.transactions.push(`${date} || ${this.round(amount)} || || ${this.round(this.balance)}`)
 };

 Account.prototype.withdraw = function (date, amount) {
   this.balance -= amount
   this.transactions.push(`${date} || || ${this.round(amount)} || ${this.round(this.balance)}`)
 };

 Account.prototype.round = function(number) {
   return Number(number).toFixed(2)
 }
