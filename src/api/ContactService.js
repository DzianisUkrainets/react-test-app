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

    getById(id) {
        return new Promise((resolve, reject ) =>
        {
            resolve(this.contacts.contacts.find(item => item.id == id));
        });
    }

    update(contact) {
        return new Promise((resolve, reject ) =>
        {
            var elIndex = -1;;
            this.contacts.contacts.find( (item, index) => { 
                if (item.id == contact.id) {
                    elIndex = index;
                    return true;
                }
            })

            if (elIndex) {
                this.contacts.contacts.splice(elIndex, 1, contact )
                resolve(this.contacts);
            }
            reject()
        });
    }
}