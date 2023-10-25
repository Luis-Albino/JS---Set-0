"use strict";
/// names ///

const firstName = ["Joe","Nicholas","Kevin","Brian","Bruno","Ana","Sophis","Sara","Marian","Julia"];
const lastName = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Lanen","Fernandez"];

/// Users list ///

function Person () {
    this.name = firstName[Math.floor(Math.random()*(firstName.length))] +" "+ lastName[Math.floor(Math.random()*(lastName.length))];
    this.cash =1000 // Dollars in cash
}

Person.prototype.handleCash = function (quantity) {
    // Receiving or Paying money //
    if (quantity > 0 || this["cash"] > -quantity) {
        this["cash"] += quantity;
        return true
    }
    // Not enough money for payment //
    return false
}

var person =[];
const totalPersons = 10;
for (let i=0; i<totalPersons; i++) {
    person[i] = new Person();
};

function Bank (bankName) {
    this.bankName = bankName;
    let accounts = {};
    let thisAccountNumber = 0;
    this.newClient = function (newPerson) {
        let client = {
            name: newPerson.name,
            money: 1000,
        };
        accounts[[thisAccountNumber]] = client;
        newPerson[[this.bankName]] = new this.BankCredentials(thisAccountNumber,newPerson);

        thisAccountNumber++;
    };

    this.BankCredentials = function (accountNumber,thisPerson) {
        this.account_number = accountNumber;
        this.personID = person.indexOf(thisPerson)
    }

    this.BankCredentials.prototype.operation = function (type,quantity,toAccount) {
        let thisPerson = person[this.personID];
        switch (type) {
            case "deposit": 
                if (thisPerson.handleCash(-quantity)) this.handleMoney(quantity,toAccount);
                break;
            case "retrieve": 
                if (this.handleMoney(-quantity, thisPerson[bankName].account_number)) thisPerson.handleCash(quantity);
                break;
            case "balance":
                this.handleMoney(0,thisPerson[bankName].account_number);
        }
    }

    this.BankCredentials.prototype.handleMoney = function (quantity,toAccount) {
        if (accounts[toAccount]) {
            if (quantity > 0 || (quantity < 0 && accounts[toAccount].money > - quantity)) {
                accounts[toAccount].money += quantity;
                return true
            }
            else if (quantity === 0) {
                console.log(`Balance: Dear ${accounts[toAccount].name}, you have $${accounts[toAccount].money}`)
            }
        }
    }
    
};

let BBVA = new Bank("BBVA");

BBVA.newClient(person[0])
BBVA.newClient(person[1])
BBVA.newClient(person[2])
person[0].BBVA.operation("deposit",500,1)
person[2].BBVA.operation("retrieve",300,)
console.log(person[0].name,", cash",person[0].cash)
console.log(person[1].name,", cash",person[1].cash)
console.log(person[2].name,", cash",person[2].cash)
person[0].BBVA.operation("balance")
person[1].BBVA.operation("balance")
person[2].BBVA.operation("balance")
