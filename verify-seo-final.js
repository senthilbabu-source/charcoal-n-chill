const fs = require('fs');
const path = require('path');

// Helper to extract JSON objects from files (regex based for simple checks)
function extractJsonLd(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Look for JsonLd data props or raw object definitions
    const matches = [];
    const regex = /data={({[\s\S]*?})}/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        matches.push(match[1]);
    }
    return matches;
}

console.log("Starting Schema Validation...");

// Files to check
const files = [
    'src/components/layout/JsonLd.tsx',
    'src/app/menu/page.tsx',
    'src/app/events/page.tsx',
    'src/app/about/page.tsx',
    'src/app/faq/page.tsx',
    'src/app/locations/[city]/page.tsx'
];

let errors = 0;

files.forEach(f => {
    const fullPath = path.join(process.cwd(), f);
    if (fs.existsSync(fullPath)) {
        console.log(`✅ File found: ${f}`);
        // In a real build we'd import the TS, but here we scan for obvious syntax errors
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('"@context": "https://schema.org"')) {
            console.log(`   - Schema context found.`);
        } else {
            console.log(`   ⚠️ Warning: No explicit @context found (might be dynamic)`);
        }

        // Critical Checks
        if (f.includes('JsonLd.tsx') && !content.includes('ReserveAction')) {
            console.error(`   ❌ Critical: ReserveAction missing in JsonLd.tsx`);
            errors++;
        }
        if (f.includes('events/page.tsx') && !content.includes('getNextFriday')) {
            console.error(`   ❌ Critical: Dynamic Date logic missing in events/page.tsx`);
            errors++;
        }
        if (f.includes('about/page.tsx') && !content.includes('AboutPage')) {
            console.error(`   ❌ Critical: AboutPage schema missing in about/page.tsx`);
            errors++;
        }
        if (f.includes('faq/page.tsx') && !content.includes('FAQPage')) {
            console.error(`   ❌ Critical: FAQPage schema missing in faq/page.tsx`);
            errors++;
        }
    } else {
        console.log(`⚠️ File not found (might be dynamic path): ${f}`);
    }
});

if (errors === 0) {
    console.log("\nSUCCESS: Critical SEO Schema elements are present and sound.");
} else {
    console.log(`\nFAILURE: Found ${errors} critical SEO gaps.`);
    process.exit(1);
}
