export class SimpleStorage {
    constructor (data) {
        this.data = data || {};
    }
    setItem (itemName, value) {
        this.data[itemName] = value;
    }
    getItem (itemName) {
        return this.data[itemName] || '';
    }
}

export default new SimpleStorage();