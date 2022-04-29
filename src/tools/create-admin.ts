import * as readlineSync from 'readline-sync';
import { SITE_NAME } from '../shared/constants';

console.log(`\nCreating an admin user for ${SITE_NAME}...\n`);

const firstName = readlineSync.question(`User first name: `).trim();
const lastName = readlineSync.question(`User last name: `).trim();
const email = readlineSync.question(`Email address: `).trim();
readlineSync.question('Password: ', { hideEchoBack: true });

console.log(`\nCreated: ${firstName} ${lastName} <${email}>`);
