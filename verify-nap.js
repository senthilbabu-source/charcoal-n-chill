/**
 * NAP Consistency Checker
 * Verifies Name, Address, Phone consistency across all pages
 */

const pages = [
    'http://localhost:3000/',
    'http://localhost:3000/menu',
    'http://localhost:3000/events',
    'http://localhost:3000/private-events',
    'http://localhost:3000/about',
    'http://localhost:3000/contact',
    'http://localhost:3000/faq',
];

const expectedNAP = {
    name: 'Charcoal N Chill',
    address: '11950 Jones Bridge Rd Ste 103',
    city: 'Alpharetta',
    state: 'GA',
    zip: '30005',
    phone: '(470) 546-4866',
    phoneRaw: '+14705464866',
    email: 'charcoalnchill@gmail.com',
};

async function checkNAP(url, pageName) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const findings = {
            hasName: html.includes(expectedNAP.name),
            hasAddress: html.includes(expectedNAP.address),
            hasCity: html.includes(expectedNAP.city),
            hasZip: html.includes(expectedNAP.zip),
            hasPhone: html.includes(expectedNAP.phone) || html.includes(expectedNAP.phoneRaw),
            hasEmail: html.includes(expectedNAP.email),
        };

        // Check for variations
        const variations = {
            phoneVariations: [
                html.match(/470[\s\-\.]?546[\s\-\.]?4866/g),
                html.match(/\+1[\s\-\.]?470[\s\-\.]?546[\s\-\.]?4866/g),
            ].filter(Boolean).flat(),
            addressVariations: [
                html.match(/11950\s+Jones\s+Bridge\s+Rd/gi),
                html.match(/Jones\s+Bridge\s+Road/gi),
            ].filter(Boolean).flat(),
        };

        const score = Object.values(findings).filter(v => v).length;
        const total = Object.keys(findings).length;

        console.log(`\n${pageName}:`);
        console.log(`  Name: ${findings.hasName ? '✅' : '❌'}`);
        console.log(`  Address: ${findings.hasAddress ? '✅' : '❌'}`);
        console.log(`  City: ${findings.hasCity ? '✅' : '❌'}`);
        console.log(`  ZIP: ${findings.hasZip ? '✅' : '❌'}`);
        console.log(`  Phone: ${findings.hasPhone ? '✅' : '❌'}`);
        console.log(`  Email: ${findings.hasEmail ? '✅' : '❌'}`);

        if (variations.phoneVariations.length > 1) {
            console.log(`  ⚠️  Multiple phone formats found: ${[...new Set(variations.phoneVariations)].join(', ')}`);
        }

        if (variations.addressVariations.length > 1) {
            console.log(`  ⚠️  Multiple address formats found`);
        }

        console.log(`  Score: ${score}/${total}`);

        return { score, total, findings, variations };
    } catch (error) {
        console.error(`Error checking ${pageName}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🔍 NAP Consistency Audit\n');
    console.log('Expected NAP Information:');
    console.log(`  Name: ${expectedNAP.name}`);
    console.log(`  Address: ${expectedNAP.address}, ${expectedNAP.city}, ${expectedNAP.state} ${expectedNAP.zip}`);
    console.log(`  Phone: ${expectedNAP.phone}`);
    console.log(`  Email: ${expectedNAP.email}`);
    console.log('\n' + '='.repeat(60));

    const results = [];

    for (let i = 0; i < pages.length; i++) {
        const pageName = pages[i].replace('http://localhost:3000', '') || 'Home';
        const result = await checkNAP(pages[i], pageName);
        if (result) results.push({ page: pageName, ...result });
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Summary:');

    const allConsistent = results.every(r => r.score === r.total);
    const avgScore = results.reduce((sum, r) => sum + (r.score / r.total), 0) / results.length * 100;

    console.log(`  Average NAP Consistency: ${avgScore.toFixed(1)}%`);
    console.log(`  Pages with complete NAP: ${results.filter(r => r.score === r.total).length}/${results.length}`);

    if (allConsistent) {
        console.log('\n✅ NAP information is consistent across all pages!');
    } else {
        console.log('\n⚠️  Some pages have incomplete NAP information.');
        console.log('   This is normal for pages where contact info is not displayed.');
    }

    // Check for inconsistencies
    const phoneInconsistencies = results.filter(r =>
        r.variations.phoneVariations && r.variations.phoneVariations.length > 1
    );

    if (phoneInconsistencies.length > 0) {
        console.log('\n⚠️  WARNING: Phone number formatting inconsistencies detected!');
        console.log('   Ensure consistent formatting across all pages for better SEO.');
    }
}

main();
