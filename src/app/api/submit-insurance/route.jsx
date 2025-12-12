import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const data = await req.json();

        // ⭐ Honeypot check
        if (data.website && data.website.trim() !== "") {
            return NextResponse.json(
                { message: "Spam detected!" },
                { status: 400 }
            );
        }

        const {
            name,
            email,
            phone,
            insurance,
            contact,
            msg,
            consent,
            address,
            city,
            state,
            zip
        } = data; // ✅ use the first parsed JSON

        // Google Sheets Auth
        const auth = new google.auth.JWT({
            email: process.env.CLIENT_EMAIL,
            key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Append to Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A2',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [[name, email, phone, insurance, contact, address, city, state, zip, msg]],
            },
        });

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const emailBody = [
            name && `Name: ${name}`,
            email && `Email: ${email}`,
            phone && `Phone: ${phone}`,
            insurance && `Insurance Type: ${insurance}`,
            contact && `Contact Method: ${contact}`,
            address && `Address: ${address}`,
            city && `City: ${city}`,
            state && `State: ${state}`,
            zip && `Zip Code: ${zip}`,
            msg && `Message: ${msg}`
        ].filter(Boolean).join('\n');

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: `${process.env.EMAIL_USER}, seoproduction@inhousedept.com, info@circadianbrokers.com`,
            subject: 'New Insurance Submission',
            text: emailBody,
        });

        return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('❌ Submit error:', error);
        return NextResponse.json({
            message: 'Server error',
            error: error.message,
        }, { status: 500 });
    }
}
