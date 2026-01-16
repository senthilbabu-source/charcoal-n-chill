const pages = [
    { path: '/blog/bollywood-night-recap', name: 'Blog: Bollywood Night' },
    { path: '/blog/ultimate-guide-hookah-flavors', name: 'Blog: Hookah Flavors' },
];

async function verifyPage(url, name) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const html = await response.text();

        const checks = {
            title: html.includes('<title>') && html.includes('Charcoal N Chill'),
            metaDescription: html.includes('name="description"'),
            ogTags: html.includes('property="og:title"'),
            jsonLd: html.includes('application/ld+json'),
            canonical: html.includes('rel="canonical"'),
            comments: html.includes('disqus_thread') || html.includes('disqus-react'),
        };

        const passed = Object.values(checks).every(v => v);

        console.log(`\n${name} (${url}):`);
        console.log(`  ✓ Title: ${checks.title ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Meta Description: ${checks.metaDescription ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Open Graph: ${checks.ogTags ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ JSON-LD: ${checks.jsonLd ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Canonical: ${checks.canonical ? 'PASS' : 'FAIL'}`);
        console.log(`  ✓ Comments: ${checks.comments ? 'PASS' : 'FAIL'}`);
        console.log(`  Overall: ${passed ? '✅ PASS' : '❌ FAIL'}`);

        return passed;
    } catch (error) {
        console.error(`Error verifying ${name}:`, error.message);
        return false;
    }
}

async function main() {
    console.log('🔍 Dynamic SEO Verification\n');
    for (const page of pages) {
        await verifyPage(`http://localhost:3000${page.path}`, page.name);
    }
}

main();
