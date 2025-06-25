// lib/googleSheet.js
import { google } from 'googleapis';
import path from 'path';

const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'config/credentials.json'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export const addToSheet = async (values = []) => {
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    await sheets.spreadsheets.values.append({
        spreadsheetId: '1afC4BwJ-Mfj0jmSzCAAtvy7cRPmpV5n3AIIDLzJLcK4',
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [values],
        },
    });
};
