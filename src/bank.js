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

 Account.prototype.deposit = function (amount, date) {
   this.balance += amount
   this.transactions.push(`${date} || ${this.display2DP(amount)} || || ${this.display2DP(this.balance)}`)
 };

 Account.prototype.withdraw = function (amount, date) {
   this.balance -= amount
   this.transactions.push(`${date} || || ${this.display2DP(amount)} || ${this.display2DP(this.balance)}`)
 };

 Account.prototype.display2DP = function(number) {
   return Number(number).toFixed(2)
 }
