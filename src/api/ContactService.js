import * as samples from './samples.json';


export default class ContactService {
    constructor(contacts = samples) {
        this.contacts = contacts;
    }

    getAll() {
        return new Promise((resolve, reject ) =>
        {
            setTimeout(() => resolve(this.contacts), 300)
        });
    }
}