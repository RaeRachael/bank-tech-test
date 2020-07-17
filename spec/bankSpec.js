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
    it('two deposits', function(){
      account.deposit(775, "04/07/2020")
      account.deposit(350, "05/07/2020")
      output = "date || credit || debit || balance\n05/07/2020 || 350.00 || || 1125.00\n04/07/2020 || 775.00 || || 775.00"
      expect(account.printStatement()).toEqual(output);
    });
    it('diposit, unspecified date', function(){
      account.deposit(853.25)
      var today = todayFormatted()
      output = `date || credit || debit || balance\n${today} || 853.25 || || 853.25`
      expect(account.printStatement()).toEqual(output);
    });
  });

  describe('withdraw(date, amount)', function() {
    it('withdraw', function(){
      account.withdraw(105, "15/07/2020")
      output = "date || credit || debit || balance\n15/07/2020 || || 105.00 || -105.00"
      expect(account.printStatement()).toEqual(output);
    });
    it('withdraw, unspecified date', function(){
      account.withdraw(97.5)
      var today = todayFormatted()
      output = `date || credit || debit || balance\n${today} || || 97.50 || -97.50`
      expect(account.printStatement()).toEqual(output);
    });
  });
})
