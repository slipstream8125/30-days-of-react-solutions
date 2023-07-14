const prompt = require("prompt-sync")({ sigint: true });
//Q1.
console.log("Question 1 :");
const personAccount = {
  firstName: null,
  lastName: null,
  income: [1000, 1200],
  expenses: [1000, 1500],

  totalIncome: function () {
    var total = 0;
    income = `${this.income}`;
    income = income.split(",");
    for (i = 0; i < income.length; i++) {
      total += parseInt(income[i]);
    }
    return total;
  },
  totalExpenses: function () {
    var total = 0;
    expenses = `${this.expenses}`;
    expense = expenses.split(",");
    for (i = 0; i < expense.length; i++) {
      total += parseInt(expense[i]);
    }
    return total;
  },
  accountInfo: function () {
    console.log("Total Expenses : " + `${this.totalExpenses()}`);
    console.log("Total Income : " + personAccount.totalIncome());
  },
  addIncome: function () {
    var e = prompt("Enter Added Income : ");
    personAccount.income.push(e);
  },
  addExpense: function () {
    var i = prompt("Enter Added Expense: ");
    personAccount.expenses.push(i);
  },
  accountBalance: function () {
    console.log(personAccount.totalIncome() - personAccount.totalExpenses());
  },
};
personAccount.accountInfo();
personAccount.addIncome();
personAccount.accountInfo();
personAccount.addExpense();
personAccount.accountInfo();
personAccount.accountBalance();
// For Q2 to Q4 :
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
//Q2.
console.log("Question 2 : ");
//A.
function signUp(user) {
  var count = 0;
  for (i in users) {
    if (user === users[i].username) {
      count++;
    }
  }
  if (count === 0) {
    var _id = prompt("Enter id : ");
    var username = user;
    var email = prompt("Enter email : ");
    var password = prompt("Enter password : ");
    var createdAt = prompt("Enter time created at : ");
    var isLoggedIn = true;
    Object.assign(users, {
      _id: _id,
      username: username,
      email: email,
      password: password,
      createdAt: createdAt,
      isLoggedIn: isLoggedIn,
    });
    console.log("Account created");
  } else {
    console.log("User already exists");
  }
}
function signIn(user) {
  for (i in users) {
    if (user === users[i].username) {
      var password = prompt("Enter Password : ");
      if (password === users[i].password) {
        console.log("Password valid");
      } else {
        console.log("Invalid password");
      }
    }
  }
}
console.log("Do you want to :");
console.log("1. Sign Up");
console.log("2. Sign in");
var inp = prompt("Enter input -> ");
if (inp == 1) {
  var userName = prompt("Enter username : ");
  signUp(userName);
} else if (inp == 2) {
  var userName = prompt("Enter username : ");
  signIn(userName);
}
//Q3.
console.log("Question 3 : ");
function rateProduct(userid) {
  var productName = prompt("Enter Product Name : ");
  var rating = prompt("Enter rating : ");
  for (i in products) {
    if (products[i].name === productName) {
      products[i].ratings.push({ userId: userid, rate: parseInt(rating) });
      console.log(products[i]);
    }
  }
}
function averageRating(productName) {
  var average = 0;
  for (i in products) {
    if (products[i].name == productName) {
      for (j in products[i].ratings) {
        average += products[i].ratings[j].rate;
      }
    }
  }
  return average / products[i].ratings.length;
}
var userId = prompt("Enter userId : ");
rateProduct(userId);
var productName = prompt("Enter product name for average rating : ");
console.log(
  "The average rating of " + productName + " is : " + averageRating(productName)
);
//Q5.
console.log("Question 5 : ");
function likeProduct(product) {
  for (i in products) {
    if (products[i].name === product) {
      if (products[i].likes.length === 0) {
        products[i].likes.push(prompt("Enter username : "));
      } else {
        products[i].likes.pop();
      }
    }
  }
  console.log(products[2].likes);
}
var prod = prompt("Enter product name to like : ");
likeProduct(prod);
