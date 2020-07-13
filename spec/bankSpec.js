describe('Bank', function(){

  var account;

  beforeEach(function(){
    account = new Account;
  });

  describe('print', function() {
    it('output with no transactions', function(){
      expect(account.printStatement()).toEqual("date || credit || debit || balance");
    });
  })
  describe('deposit(date, amount)', function() {
    it('deposit', function(){
      account.deposit("13/07/2020", 1005)
      output1 = "date || credit || debit || balance\n13/07/2020 || 1005 || || 1005"
      expect(account.printStatement()).toEqual(output1);
    });
    it('deposit, 2', function(){
      account.deposit("14/07/2020", 875)
      output2 = "date || credit || debit || balance\n14/07/2020 || 875 || || 875"
      expect(account.printStatement()).toEqual(output2);
    });
  })
})
