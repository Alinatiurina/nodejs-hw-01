import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const parseData = JSON.parse(data);
        return parseData.length;
    }
    catch (error) {
        console.error('Error')
    }
};

console.log(await countContacts());
