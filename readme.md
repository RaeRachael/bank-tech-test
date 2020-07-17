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

## Reading of the Requirements

I felt like taking the above example of an acceptable output as laying out all of the requirements for the tech challenge, therefore I deemed that the balance can be negative (I would have liked to have asked for clarification about that). This may have made the challenge easier than the setter intended, which also lead me to only use one class as there didn't seem to be enough code to separate into multiple classes, without added addition complexity to the code and reducing the readability of it (two classes would lead to two different code files, three different spec files). My feeling is that this choice is a very subjective one and that it could be deemed to not follow SRP. However there is always a degree of subjectivity about what constitutes a responsibility (how narrow or large can it be?)

There is in this branch the same task achieved using two classes to show how I would have gone about doing that separation, which goes to show the increase in code and testing that path would require. 

## Plan

feature tests by the output from print_statement.

transaction history in an array of hashes.

transaction hash -- keys
  date
  credit
  debit
  balance

### Changes

In the process of writing the code, it became clear that holding the data in a hash isn't required for the current level of complexity asked for. So instead the history of transactions is simply saved as a string in the form required of the output.
