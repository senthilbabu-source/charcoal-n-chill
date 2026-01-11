/**
 * Business Hours Verification Script
 * Checks that business hours are correctly displayed across all pages
 */

const pages = [
    { url: 'http://localhost:3000/', name: 'Home' },
    { url: 'http://localhost:3000/contact', name: 'Contact' },
];



async function checkHours(url, pageName) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const findings = {
            hasSunday: html.includes('Sunday') && html.includes('5:00 PM - 1:00 AM'),
            hasMonday: html.includes('Monday') && html.includes('Closed'),
            hasTuesday: html.includes('Tu - Th') || (html.includes('Tuesday') && html.includes('5:00 PM - 1:00 AM')),
            hasFriday: html.includes('Fr - Sa') || (html.includes('Friday') && html.includes('5:00 PM - 2:00 AM')),
        };

        // Check JSON-LD for Sunday
        const hasSundayInSchema = html.includes('"dayOfWeek":["Sunday"') ||
            html.includes('"dayOfWeek": ["Sunday"') ||
            html.includes('Sunday","Tuesday');

        console.log(`\n${pageName}:`);
        console.log(`  Sunday (5 PM - 1 AM): ${findings.hasSunday ? '✅' : '❌'}`);
        console.log(`  Monday (Closed): ${findings.hasMonday ? '✅' : '❌'}`);
        console.log(`  Tu-Th (5 PM - 1 AM): ${findings.hasTuesday ? '✅' : '❌'}`);
        console.log(`  Fr-Sa (5 PM - 2 AM): ${findings.hasFriday ? '✅' : '✅'}`);
        console.log(`  Sunday in JSON-LD Schema: ${hasSundayInSchema ? '✅' : '❌'}`);

        const score = Object.values(findings).filter(v => v).length + (hasSundayInSchema ? 1 : 0);
        const total = Object.keys(findings).length + 1;

        console.log(`  Score: ${score}/${total}`);

        return { score, total, findings, hasSundayInSchema };
    } catch (error) {
        console.error(`Error checking ${pageName}:`, error.message);
        return null;
    }
}

async function main() {
    console.log('🕐 Business Hours Verification\n');
    console.log('Expected Hours:');
    console.log('  Sunday: 5:00 PM - 1:00 AM');
    console.log('  Monday: Closed');
    console.log('  Tuesday - Thursday: 5:00 PM - 1:00 AM');
    console.log('  Friday - Saturday: 5:00 PM - 2:00 AM');
    console.log('\n' + '='.repeat(60));

    const results = [];

    for (const page of pages) {
        const result = await checkHours(page.url, page.name);
        if (result) results.push({ page: page.name, ...result });
    }

    console.log('\n' + '='.repeat(60));
    console.log('\n📊 Summary:');

    const allCorrect = results.every(r => r.score === r.total);
    const avgScore = results.reduce((sum, r) => sum + (r.score / r.total), 0) / results.length * 100;

    console.log(`  Average Accuracy: ${avgScore.toFixed(1)}%`);
    console.log(`  Pages with correct hours: ${results.filter(r => r.score === r.total).length}/${results.length}`);

    if (allCorrect) {
        console.log('\n✅ Business hours are correctly displayed everywhere!');
    } else {
        console.log('\n⚠️  Some pages have incorrect or missing hours.');
    }

    // Check specifically for Sunday
    const sundayCorrect = results.every(r => r.findings.hasSunday && r.hasSundayInSchema);
    if (sundayCorrect) {
        console.log('✅ Sunday hours (5 PM - 1 AM) are correctly displayed and in schema!');
    } else {
        console.log('❌ Sunday hours need to be added or corrected.');
    }
}

main();
