import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let parseData = JSON.parse(data);
        parseData = [];
        await fs.writeFile(PATH_DB, JSON.stringify(parseData));
    }
    catch (error) {
        console.error('Error')
    }
};

await removeAllContacts();
