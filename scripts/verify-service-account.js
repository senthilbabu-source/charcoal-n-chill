/* eslint-disable */
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local because dotenv might not be installed
const envPath = path.resolve(__dirname, '../.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
        let value = match[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }
        envVars[match[1]] = value;
    }
});

async function verifyServiceAccount() {
    try {
        const clientEmail = envVars.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = envVars.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        if (!clientEmail || !privateKey) {
            console.error('Error: Credentials missing in .env.local');
            return;
        }

        console.log(`Authenticating as: ${clientEmail}`);

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: clientEmail,
                private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/siteverification'],
        });

        const siteVerification = google.siteVerification({ version: 'v1', auth });

        // 1. Get Verification Token
        console.log('Requesting verification token...');
        const tokenRes = await siteVerification.webResource.getToken({
            requestBody: {
                verificationMethod: 'FILE',
                site: {
                    identifier: 'https://charcoalnchill.com',
                    type: 'SITE',
                },
            },
        });

        const token = tokenRes.data.token;
        console.log(`\nSUCCESS! Token received:`);
        console.log(token);
        console.log(`\nNext Steps:`);
        console.log(`1. Create a file in 'public/' named: ${token}`);
        console.log(`2. The content of the file should be: google-site-verification: ${token}`);

    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Details:', JSON.stringify(error.response.data, null, 2));
        }
    }
}

verifyServiceAccount();
