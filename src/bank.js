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
  date = date || this._today()
  this.balance += amount
  this.transactions.push(`${date} || ${this._display2DP(amount)} || || ${this._display2DP(this.balance)}`)
};

Account.prototype.withdraw = function (amount, date) {
  date = date || this._today()
  this.balance -= amount
  this.transactions.push(`${date} || || ${this._display2DP(amount)} || ${this._display2DP(this.balance)}`)
};

Account.prototype._display2DP = function(number) {
  return Number(number).toFixed(2)
}

Account.prototype._today = function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = dd +'/' + mm + '/' + yyyy

  return today
};
