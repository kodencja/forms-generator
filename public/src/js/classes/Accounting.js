// wszystkie obiekty utworzone na podstawie klasy Accounting będą zbudowane na podstawie interface 'Hasformatter' czyli musza posiadać metodę "format" zwracającą 'string'
export class Accounting {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    printMsg() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
