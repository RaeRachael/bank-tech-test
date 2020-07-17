## How to run

```
open SpecRunner
```
* To create an account; ``` <name> = new Account ```
* To print statement; ``` <name>.printStatemnt()```
* To depostit; ```<name>.deposit(<amount>)```
* To withdraw; ```<name>.withdraw(<amount>)```


## Specification

### Requirements
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Extra Class

This branch has two classes, Account and TransactionHistory, with unit test on both (using mocking to isolate them),
I personally feel this is beyond what the current spec on the challenge needs but is likely to be a more useful jumping off point if further requirements came in than the single class version.
