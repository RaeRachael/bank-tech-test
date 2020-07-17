function TransactionHistory() {
  this.transactions = []
}

TransactionHistory.prototype.addTransaction = function(date, credit, debit, balance) {
  this.transactions.push(`${date} ||${this._display2DP(credit)} ||${this._display2DP(debit)} ||${this._display2DP(balance)}`)
}

TransactionHistory.prototype.listAll = function() {
  output = "date || credit || debit || balance"
  this.transactions.reverse().forEach( function(transaction) {
    output += "\n" + transaction
  });
  return output
}

TransactionHistory.prototype._display2DP = function(number) {
  if (number === 0) {
    return ""
  }
  return " " + Number(number).toFixed(2)
}
