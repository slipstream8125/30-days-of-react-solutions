const prompt = require("prompt-sync")({ sigint: true });
//Q1.
console.log("Question 1 :");
const personAccount={
  firstName : null,
  lastName : null,
  income :[1000,1200],
  expenses : [1000,1500],

  totalIncome: function(){
    var total=0;
    income=`${this.income}`;
    income=income.split(",");
    for(i=0;i<income.length;i++){
      total+=parseInt(income[i]);
    }
    return total;
  },
  totalExpenses: function(){
  var total=0;
  expenses=`${this.expenses}`;
  expense=expenses.split(",");
  for(i=0;i<expense.length;i++){
    total+=parseInt(expense[i]);
  }
  return (total);
  },
  accountInfo: function(){
    console.log("Total Expenses : "+`${this.totalExpenses()}`);
    console.log("Total Income : "+personAccount.totalIncome());
 },
  addIncome: function(){
    var e=prompt("Enter Added Income : ");
    personAccount.income.push(e);
  },
  addExpense: function(){
    var i=prompt("Enter Added Expense: ");
    personAccount.expenses.push(i);
  },
  accountBalance: function(){
    console.log(personAccount.totalIncome()-personAccount.totalExpenses());
  }
}
personAccount.accountInfo();
personAccount.addIncome();
personAccount.accountInfo();
personAccount.addExpense();
personAccount.accountInfo();
personAccount.accountBalance();
