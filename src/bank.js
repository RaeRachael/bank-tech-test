function Account() {
  this.transactions = []
 }

 Account.prototype.printStatement = function () {
   output = "date || credit || debit || balance"
   this.transactions.forEach( function(transaction) {
     output += "\n" + transaction
   });
   return output
 };

 Account.prototype.deposit = function (date, amount) {
   this.transactions.push(`${date} || ${amount} || || ${amount}`)
 };
