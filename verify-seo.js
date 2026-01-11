/**
 * SEO Verification Script
 * Run with: node verify-seo.js
 */

const pages = [
    { path: '/', name: 'Home' },
    { path: '/menu', name: 'Menu' },
    { path: '/events', name: 'Events' },
    { path: '/private-events', name: 'Private Events' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/faq', name: 'FAQ' },
];

async function verifyPage(url, name) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const checks = {
            title: html.includes('<title>') && html.includes('Charcoal N Chill'),
            metaDescription: html.includes('name="description"'),
            ogTags: html.includes('property="og:title"') && html.includes('property="og:description"'),
            twitterTags: html.includes('name="twitter:title"'),
            jsonLd: html.includes('application/ld+json'),
            canonical: html.includes('rel="canonical"'),
        };

        const passed = Object.values(checks).every(v => v);

        console.log(`\n${name} (${url}):`);
        console.log(`  ✓ Title: ${checks.title ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Meta Description: ${checks.metaDescription ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Open Graph: ${checks.ogTags ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Twitter Cards: ${checks.twitterTags ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ JSON-LD: ${checks.jsonLd ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Canonical: ${checks.canonical ? 'PASS' : 'FAIL'}`);
        console.log(`  Overall: ${passed ? '✅ PASS' : '❌ FAIL'}`);

        return passed;
    } catch (error) {
        console.error(`Error verifying ${name}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('🔍 SEO Verification Report\n');
    console.log('='.repeat(50));

    const results = [];

    for (const page of pages) {
        const url = `http://localhost:3000${page.path}`;
        const passed = await verifyPage(url, page.name);
        results.push({ name: page.name, passed });
    }

    console.log('\n' + '='.repeat(50));
    console.log('\n📊 Summary:');
    const totalPassed = results.filter(r => r.passed).length;
    console.log(`  ${totalPassed}/${results.length} pages passed all checks`);

    if (totalPassed === results.length) {
        console.log('\n✅ All pages are SEO-ready!');
    } else {
        console.log('\n⚠️  Some pages need attention.');
    }
}

main();
