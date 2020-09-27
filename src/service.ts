export class Service {
    private uuid;
    private number;
    private timeout;

    constructor(uuid, number, timeout) {
        this.uuid = uuid;
        this.number = number;
        this.timeout = timeout;
        setTimeout(() => {
            this.print();
        }, timeout);
    }

    private print() {
        setTimeout(() => {
            console.log(`Service Uuid :${this.uuid}, Number: ${this.number} executed in ${this.timeout}`);
        }, this.timeout);
    }
}