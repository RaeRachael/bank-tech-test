describe('TransactionHistory', function(){

  var transactionHistory;

  beforeEach(function(){
    transactionHistory = new TransactionHistory;
    output = ""
  });

  describe('listAll', function() {
    it('output with no transactions', function(){
      output = "date || credit || debit || balance"
      expect(transactionHistory.listAll()).toEqual(output);
    });
  });
  describe('addTransactions', function() {
    it('output with deposit', function(){
      transactionHistory.addTransaction("13/07/2020", 1005, 0, 1005)
      output = "date || credit || debit || balance\n13/07/2020 || 1005.00 || || 1005.00"
      expect(transactionHistory.listAll()).toEqual(output);
    });
    it('output with withdrawal', function(){
      transactionHistory.addTransaction("13/07/2020", 0, 56, -56)
      output = "date || credit || debit || balance\n13/07/2020 || || -56.00 || -56.00"
      expect(transactionHistory.listAll()).toEqual(output);
    });
  });
});
