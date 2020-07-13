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
      output = "date || credit || debit || balance\n13/07/2020 || 1005 || || 1005"
      expect(account.printStatement()).toEqual(output);
    });
    it('deposit, 2', function(){
      account.deposit("14/07/2020", 875)
      output = "date || credit || debit || balance\n14/07/2020 || 875 || || 875"
      expect(account.printStatement()).toEqual(output);
    });
    it('two deposits', function(){
      account.deposit("04/07/2020", 775)
      account.deposit("05/07/2020", 350)
      output = "date || credit || debit || balance\n05/07/2020 || 350 || || 1125\n04/07/2020 || 775 || || 775"
      expect(account.printStatement()).toEqual(output);
    });
  });

  describe('withdraw(date, amount)', function() {
    it('withdraw', function(){
      account.withdraw("15/07/2020", 105)
      output = "date || credit || debit || balance\n15/07/2020 || || 105 || -105"
      expect(account.printStatement()).toEqual(output);
    });
  });
})
