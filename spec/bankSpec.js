describe('Bank', function(){

  var account = new Account;

  describe('print', function() {
    it('output with no transactions', function(){
      expect(account.printStatement()).toEqual("date || credit || debit || balance");
    });
  })
})
