describe('Bank', function(){

  var account;
  var output;

  beforeEach(function(){
    account = new Account;
    output = ""
  });

  describe('print', function() {
    it('output with no transactions', function(){
      expect(account.printStatement()).toEqual("date || credit || debit || balance");
    });
  })

  describe('deposit(date, amount)', function() {
    it('deposit', function(){
      account.deposit(1005, "13/07/2020")
      output = "date || credit || debit || balance\n13/07/2020 || 1005.00 || || 1005.00"
      expect(account.printStatement()).toEqual(output);
    });
    it('deposit, 2', function(){
      account.deposit(875, "14/07/2020")
      output = "date || credit || debit || balance\n14/07/2020 || 875.00 || || 875.00"
      expect(account.printStatement()).toEqual(output);
    });
    it('two deposits', function(){
      account.deposit(775, "04/07/2020")
      account.deposit(350, "05/07/2020")
      output = "date || credit || debit || balance\n05/07/2020 || 350.00 || || 1125.00\n04/07/2020 || 775.00 || || 775.00"
      expect(account.printStatement()).toEqual(output);
    });
  });

  describe('withdraw(date, amount)', function() {
    it('withdraw', function(){
      account.withdraw(105, "15/07/2020")
      output = "date || credit || debit || balance\n15/07/2020 || || 105.00 || -105.00"
      expect(account.printStatement()).toEqual(output);
    });
  });
})
