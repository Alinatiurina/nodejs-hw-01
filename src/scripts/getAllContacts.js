import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    let data = await fs.readFile(PATH_DB, 'utf-8');
    return data;
};

console.log(await getAllContacts());
