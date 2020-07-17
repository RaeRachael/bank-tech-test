describe('TransactionHistory', function(){

  var transactionHistory;

  beforeEach(function(){
    transactionHistory = new TransactionHistory;
    output = ""
  });

  describe('listTransactions', function() {
    it('output with no transactions', function(){
      output = "date || credit || debit || balance"
      expect(transactionHistory.listAll()).toEqual(output);
    });
  });
});
