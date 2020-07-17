describe('Account', function(){

  var account;
  var output;
  var history;

  beforeEach(function(){
    history = jasmine.createSpyObj('history', ['addTransaction','listAll']);
    account = new Account(history);
    output = ""
  });

  describe('print', function() {
    it('output with no transactions', function(){
      account.printStatment()
      expect(history.listAll).toHaveBeenCalled();
    });
  })

  describe('deposit(date, amount)', function() {
    it('deposit', function(){
      account.deposit(1005, "13/07/2020")
      output = "date || credit || debit || balance\n13/07/2020 || 1005.00 || || 1005.00"
      expect(history.addTransaction).toHaveBeenCalledWith("13/07/2020", 1005, 0,1005);
    });
    it('diposit, unspecified date', function(){
      account.deposit(853.25)
      today = todayFormatted()
      output = `date || credit || debit || balance\n${today} || 853.25 || || 853.25`
      expect(history.addTransaction).toHaveBeenCalledWith(`${today}`, 853.25, 0, 853.25);
    });
  });

  describe('withdraw(date, amount)', function() {
    it('withdraw', function(){
      account.withdraw(105, "15/07/2020")
      output = "date || credit || debit || balance\n15/07/2020 || || 105.00 || -105.00"
      expect(history.addTransaction).toHaveBeenCalledWith("15/07/2020", 0, 105, -105);
    });
    it('withdraw, unspecified date', function(){
      account.withdraw(97.5)
      today = todayFormatted()
      output = `date || credit || debit || balance\n${today} || || 97.50 || -97.50`
      expect(history.addTransaction).toHaveBeenCalledWith(`${today}`, 0, 97.5, -97.5);
    });
  });
})
