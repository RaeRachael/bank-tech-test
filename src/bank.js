function Account() {
  this.transactions = []
 }

 Account.prototype.printStatement = function () {
   output = "date || credit || debit || balance"
   this.transactions.forEach( function(transaction) {
     output += transaction
   });
   return output
 };

 Account.prototype.deposit = function (date, ammount) {
   this.transactions.push("13/07/2020 || 1005 || || 1005")
 };
