import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const questions = [
  "Names and date of birth of all persons on the title",
  "Property address",
  "Mailing address, if different",
  "Is this a primary home, seasonal, or rental property",
  "Year built",
  "Square footage of living area",
  "Type of plumbing, i.e., copper, PVC, etc.",
  "Does the electrical system have circuit breakers",
  "Type of roof, and when was it last replaced",
  "Type of flooring and percentage, i.e., carpet 50%, hardwood 50%, etc.",
  "Have you had any property claims in the past 5 years? If so, the year of claim and type",
  "Do you own any dogs? If so, breed and bite history",
  "Is there a swimming pool on premises? If so, does it have a diving board or slide",
  "Current or latest insurance carrier and Current Insurance expiration date or cancellation date",
  "Reason for cancellation",
  "Purchase date",
  "Any business on the premises, i.e., daycare/beautician",
  "Contact phone number",
  "Contact Email Address",
  "How did you hear about us",
];

export async function POST(req) {
  const answers = await req.json();

  if (!Array.isArray(answers) || answers.length !== 20) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }

  try {
    // Authenticate with Google Sheets API using Service Account
    const auth = new google.auth.JWT({
      email: process.env.CLIENT_EMAIL,
      key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append answers to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_HOME,
      range: 'Sheet1!A2',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [answers],
      },
    });

    // Text email body
    const textBody = answers
      .map((answer, i) => `${questions[i]}:\n${answer || '[blank]'}\n`)
      .join('\n');

    // HTML email body
    const htmlBody = `
      <h2>New Home Insurance Submission</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
        ${answers
        .map(
          (a, i) =>
            `<tr>
                <td><strong>${questions[i]}</strong></td>
                <td>${a || '[blank]'}</td>
              </tr>`
        )
        .join('')}
      </table>
    `;

    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER}, seoproduction@inhousedept.com, info@circadianbrokers.com`,
      subject: 'New Home Insurance Form Submission',
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ message: 'Submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('❌ Submission Error:', error);
    return NextResponse.json({
      message: 'Server error',
      error: error.message,
    }, { status: 500 });
  }
}
