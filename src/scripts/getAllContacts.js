import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        return data;
    }
    catch (error) {
        console.error('Error')
    }
};

console.log(await getAllContacts());
