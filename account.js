const moment = require('moment');

class Account {
    #amount;
    #account_id;
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() { 
        console.log("Sizning hisobingizdagi qoldiq: ", this.#amount,"$")
        return this.#amount;
    }

    sendingMoney(amount) {
         if(this.#amount > amount){
            this.#amount = this.#amount - amount;
            console.log(`Sizning hisobingizdan ${amount}$ yechildi, Qoldiq: ${this.#amount}$`)
        }else{
            console.log("Sizning hisobingizda mablag' yetarli emas. ", this.#amount,"$");
        }
    }

    deposit(amount) {
        this.#amount += amount;
        console.log(`Hisobingizga ${amount}$ to'ldirildi. Hozrgi balance: ${this.#amount}$`);
    }

    showDetails() {
        console.log('========================');
        console.log(`Karta egasi: ${this.name}. Hozirgi balance: ${this.#amount}$`);
        console.log(`Hisob raqamingiz: ${this.#account_id}`);
    }

    static tellMeAboutClass() {
        console.log('========================');
        console.log("Bu class Accountlarni yasash uchun xizmat qiladi.");
    }

    static tellMeTime() {
        console.log("=========================");
        console.log(`Hozirgi vaqt: ${moment().format("YYYY.MM.DD. HH:mm:ss")}`);
    }
}

module.exports = Account;