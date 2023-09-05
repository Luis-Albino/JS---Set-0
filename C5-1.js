"use strict";
/// names ///

const firstName = ["Joe","Nicholas","Kevin","Brian","Bruno","Ana","Sophis","Sara","Marian","Julia"];
const lastName = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Lanen","Fernandez"];

/// Users list ///

var user =[];
const totalUsers = 10;
for (let i=0; i<totalUsers; i++) {
    user[i] = {
        "cash":1000, // Dollars in cash
        "name": firstName[Math.floor(Math.random()*(firstName.length))] +" "+ lastName[Math.floor(Math.random()*(lastName.length))]
    };
};


/// Client Constructor ///

function Client (user) {
    this.user = user;
    let moneyOnBank = 2000; // Dollars saved on Bank: stored at CLOSURE
    this.handleMoney = function (quantity) {
        if (quantity != 0) {
            moneyOnBank +=  quantity;
        }
        else {
            return moneyOnBank
        }
    };
 };

Client.prototype = {
    get Balance () {
        let userMoney = this.handleMoney(0);
        return "Dear "+ this.user["name"]+", you have $" + userMoney + " in your account and $" + this.user["cash"] + " in your pocket"
    },

    set Retrieve (quantity) {
        if (this.handleMoney(0) >= quantity) {
            this.handleMoney(-quantity);
            this.user["cash"] = this.user["cash"] + quantity;
        }
        else {
            console.log("Insufficient funds");
        };
    },

    Deposit : function (quantity,toAccount,isDeposited = true) {
        let toAccountNumber = toAccount["accountNumber"]
        if (quantity === 0 || (typeof quantity) != "number") {
            console.log("Invalid amount of money");
        }
        else if (!toAccountNumber || (typeof toAccountNumber) != "number") {
            console.log("Invalid account number");
        }
        else {
            if ((!isDeposited && this.handleMoney(0) >= quantity) || this.user["cash"] >= quantity) {
                toAccount.handleMoney(quantity);
                if (isDeposited) {
                    this.user["cash"] = this.user["cash"] - quantity;
                }
                else {
                    this.handleMoney(-quantity);
                }
                let destinatary;
                if (toAccountNumber === this.accountNumber) {
                    destinatary = "your account";
                }
                else {
                    destinatary = "" + user[toAccountNumber]["name"]
                };
                console.log("Dear " + this.user["name"] + ", you have " + (!isDeposited?"transfered":"deposited") + " $" + quantity + " to " + destinatary);
                
            }
            else {
                console.log("Dear " + this.user["name"]+", you don't have enough " + (!isDeposited?"funds":"money in your pocket"));
            };
        };
    }
};



/// Creating client list ///
let clients = [];
for (let i=0; i<totalUsers; i++) {
    clients[i] = new Client(user[i])
}


/// Creating Bank ///

var numberOfClients = 0;

function Bank () {
    let accounts = {};

    for (let i=0; i<totalUsers; i++) {
        let client = clients[i];
        accounts[numberOfClients] = client;
        client["accountNumber"] = numberOfClients;
        numberOfClients++;
    };
    this.balance = function (accountNumber) {
        return accounts[accountNumber].Balance;
    };
    this.deposit = function (fromAccountNumber,toAccountNumber,quantity) {
        accounts[fromAccountNumber].Deposit(quantity,accounts[toAccountNumber]);
    };
    this.transfer = function (fromAccountNumber,toAccountNumber,quantity) {
        accounts[fromAccountNumber].Deposit(quantity,accounts[toAccountNumber],false);
    };
    this.retrieve =  function (fromAccountNumber,quantity) {
        accounts[fromAccountNumber].Retrieve = quantity
    }
}

let myBank = new Bank();

/// Client transactions ///
console.log(clients[0].Balance)
clients[0].Retrieve = 300
console.log(clients[0].Balance)
clients[1].Deposit(200,clients[3])
clients[1].Deposit(200,clients[2],false)
console.log(clients[1].Balance)
console.log(clients[2].Balance)
console.log(clients[3].Balance)

/// Bank transactions ///
myBank.transfer(0,1,1300)
myBank.deposit(0,2,200)
console.log(myBank.balance(0))
console.log(myBank.balance(1))
console.log(myBank.balance(2))
myBank.retrieve(2,300);
console.log(myBank.balance(2))
