import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        let data = await fs.readFile(PATH_DB, 'utf-8');
        const parseData = JSON.parse(data);
        for (let i = 0; i < number; i++) {
            parseData.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(parseData));
    }
    catch (error) {
        console.error('Error')
    }
};

await generateContacts(5);
