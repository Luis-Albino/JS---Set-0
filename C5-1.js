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
        return "Dear "+ user[this.accountNumber]["name"]+", you have $" + userMoney + " in your account"
    },

    set Retrieve (quantity) {
        if (this.handleMoney(0) >= quantity) {
            this.handleMoney(-quantity);
            user[this.accountNumber]["cash"] = user[this.accountNumber]["cash"] + quantity;
        }
        else {
            console.log("Insufficient funds");
        };
    },

    Deposit : function (quantity,toAccount) {
        toAccountNumber = toAccount["accountNumber"]
        if (quantity === 0 || (typeof quantity) != "number") {
            console.log("Invalid amount of money");
        }
        else if (!toAccountNumber || (typeof toAccountNumber) != "number") {
            console.log("Invalid account number");
        }
        else {
            if (user[this.accountNumber]["cash"] >= quantity) {
                toAccount.handleMoney(quantity);
                user[this.accountNumber]["cash"] = user[this.accountNumber]["cash"] - quantity;
                let destinatary;
                if (toAccountNumber === this.accountNumber) {
                    destinatary = "your account";
                }
                else {
                    destinatary = "" + user[toAccountNumber]["name"]
                };
                console.log("Dear " + user[this.accountNumber]["name"] + ", you have deposited $" + quantity + " to " + destinatary);
                
            }
            else {
                console.log(user[this.accountNumber]["name"]+" does not have enough cash");
            };
        };
    }
};


/// Creating Bank ///

var numberOfClients = 0;

function Bank () {
    let accounts = {};

    for (let i=0; i<totalUsers; i++) {
        let client = new Client(user[i]);
        accounts[numberOfClients] = client;
        client["accountNumber"] = numberOfClients;
        numberOfClients++;
    };
    this.balance = function (accountNumber) {
        // let userMoney = this.handleMoney(0);
        return "Dear "+ user[accountNumber]["name"]+", you have $" + accounts[accountNumber].handleMoney(0) + " in your account"
    };
    this.deposit = function (fromAccountNumber,toAccountNumber,quantity) {
        accounts[fromAccountNumber].Deposit(quantity,accounts[toAccountNumber]);
        accounts[fromAccountNumber].Retrieve = quantity
    };
    this.retrieve =  function (fromAccountNumber,quantity) {
        accounts[fromAccountNumber].Retrieve = quantity
    }
}

let myBank = new Bank();
myBank.deposit(0,1,200)
console.log(myBank.balance(0))
console.log(myBank.balance(1))
myBank.retrieve(1,300);
console.log(myBank.balance(1))
