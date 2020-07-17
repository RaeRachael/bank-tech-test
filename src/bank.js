function Account(transactionHistory) {
  this.transactionHistory = transactionHistory
  this.transactions = []
  this.balance = 0
}

Account.prototype.printStatement = function () {
  return this.transactionHistory.listAll()
};

Account.prototype.deposit = function (amount, date) {
  date = date || this._today()
  this.balance += amount
  this.transactionHistory.addTransaction(date, amount, 0, this.balance)
  // this.transactions.push(`${date} || ${this._display2DP(amount)} || || ${this._display2DP(this.balance)}`)
};

Account.prototype.withdraw = function (amount, date) {
  date = date || this._today()
  this.balance -= amount
    this.transactionHistory.addTransaction(date, 0, amount, this.balance)
  // this.transactions.push(`${date} || || ${this._display2DP(amount)} || ${this._display2DP(this.balance)}`)
};


Account.prototype._today = function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = dd +'/' + mm + '/' + yyyy

  return today
};
