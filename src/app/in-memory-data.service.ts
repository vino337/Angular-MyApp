import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const customers = [
            { id: 1, customerNo: '110011', name: 'customer 1', address: '', city: '', postCode: '', phone: ''},
            { id: 2, customerNo: '110012', name: 'customer 2', address: '', city: '', postCode: '', phone: ''}
        ];

        const contacts = [
            {id: 1, customerNo: '110011', contactName: 'contact name 1', phone: '', mobile: '', email: '' },
            {id: 2, customerNo: '110011', contactName: 'contact name 2', phone: '', mobile: '', email: '' }
        ];

        return { customers, contacts };
    }
}
