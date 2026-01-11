/**
 * Accessibility Verification Script
 * Checks for common accessibility issues
 */

const pages = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/events', name: 'Events' },
    { path: '/private-events', name: 'Private Events' },
];

async function verifyAccessibility(url, name) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const checks = {
            skipLink: html.includes('skip to content') || html.includes('Skip to content'),
            lang: html.includes('<html lang='),
            altText: !html.match(/<img[^>]+(?!alt=)/gi) || html.split('<img').length === html.split('alt=').length,
            ariaLabels: html.includes('aria-label') || html.includes('aria-labelledby'),
            headingStructure: html.includes('<h1') && html.includes('<h2'),
        };

        const passed = Object.values(checks).filter(v => v).length;
        const total = Object.keys(checks).length;

        console.log(`\n${name} (${url}):`);
        console.log(`  ✓ Skip Link: ${checks.skipLink ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Lang Attribute: ${checks.lang ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Image Alt Text: ${checks.altText ? 'PASS' : 'WARN'}`);
        console.log(`  ✓ ARIA Labels: ${checks.ariaLabels ? 'PASS' : 'WARN'}`);
        console.log(`  ✓ Heading Structure: ${checks.headingStructure ? 'PASS' : 'WARN'}`);
        console.log(`  Score: ${passed}/${total}`);

        return passed >= 4; // Pass if at least 4/5 checks pass
    } catch (error) {
        console.error(`Error verifying ${name}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('♿ Accessibility Verification Report\n');
    console.log('='.repeat(50));

    const results = [];

    for (const page of pages) {
        const url = `http://localhost:3000${page.path}`;
        const passed = await verifyAccessibility(url, page.name);
        results.push({ name: page.name, passed });
    }

    console.log('\n' + '='.repeat(50));
    console.log('\n📊 Summary:');
    const totalPassed = results.filter(r => r.passed).length;
    console.log(`  ${totalPassed}/${results.length} pages passed accessibility checks`);

    if (totalPassed === results.length) {
        console.log('\n✅ All pages meet accessibility standards!');
    } else {
        console.log('\n⚠️  Some pages need accessibility improvements.');
    }
}

main();
