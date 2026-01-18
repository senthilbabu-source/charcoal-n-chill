/* eslint-disable */
const https = require('https');

const testsToRun = [
    // Critical WordPress menu URLs
    { url: '/tease', expected: '/menu#appetizers', priority: 'CRITICAL' },
    { url: '/tease/', expected: '/menu#appetizers', priority: 'CRITICAL' },
    { url: '/bigbites', expected: '/menu#entrees', priority: 'CRITICAL' },
    { url: '/bigbites/', expected: '/menu#entrees', priority: 'CRITICAL' },
    { url: '/cloudreverie', expected: '/menu#hookah', priority: 'CRITICAL' },
    { url: '/cloudreverie/', expected: '/menu#hookah', priority: 'CRITICAL' },
    { url: '/bottlevibes', expected: '/menu#cocktails', priority: 'CRITICAL' },
    { url: '/bottlevibes/', expected: '/menu#cocktails', priority: 'CRITICAL' },

    // Safety catch URLs
    { url: '/appetizers', expected: '/menu#appetizers', priority: 'HIGH' },
    { url: '/entrees', expected: '/menu#entrees', priority: 'HIGH' },
    { url: '/hookah', expected: '/menu#hookah', priority: 'HIGH' },
    { url: '/desserts', expected: '/menu#desserts', priority: 'HIGH' },
    { url: '/drinks', expected: '/menu#cocktails', priority: 'HIGH' },
    { url: '/cocktails', expected: '/menu#cocktails', priority: 'HIGH' },

    // Core pages
    { url: '/about-us', expected: '/about', priority: 'CRITICAL' },
    { url: '/about-us/', expected: '/about', priority: 'CRITICAL' },
    { url: '/contact-us', expected: '/contact', priority: 'CRITICAL' },
    { url: '/contact-us/', expected: '/contact', priority: 'CRITICAL' },
    { url: '/venue', expected: '/private-events', priority: 'CRITICAL' },
    { url: '/venue/', expected: '/private-events', priority: 'CRITICAL' },
    { url: '/private-dining', expected: '/private-events', priority: 'HIGH' },
    { url: '/gallery', expected: '/blog', priority: 'MEDIUM' },

    // Old pages
    { url: '/hookah-lounge', expected: '/menu#hookah', priority: 'HIGH' },
    { url: '/hookah-lounge/', expected: '/menu#hookah', priority: 'HIGH' },
    { url: '/our-weekend-belly-dancing-shows-hit-different', expected: '/events', priority: 'HIGH' },
    { url: '/our-weekend-belly-dancing-shows-hit-different/', expected: '/events', priority: 'HIGH' },

    // Blog posts
    { url: '/best-hookah-lounge-restaurant-charcoal-n-chill', expected: '/blog', priority: 'CRITICAL' },
    { url: '/top-hookah-mixes', expected: '/blog', priority: 'HIGH' },
    { url: '/working-in-a-hookah-shop', expected: '/blog', priority: 'HIGH' },
    { url: '/top-hookah-mixes-2', expected: '/blog', priority: 'MEDIUM' },

    // WordPress system
    { url: '/wp-admin', expected: '/404', priority: 'HIGH' },
    { url: '/wp-login.php', expected: '/404', priority: 'HIGH' },
    { url: '/category/test', expected: '/blog', priority: 'MEDIUM' },
    { url: '/feed', expected: '/blog', priority: 'MEDIUM' },

    // Other
    { url: '/reservations', expected: '/', priority: 'MEDIUM' },
];

async function testRedirect(test) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: test.url,
            method: 'GET',
            headers: { 'User-Agent': 'Redirect-Tester' }
        };

        const req = https.request(options, (res) => {
            const statusCode = res.statusCode;
            const location = res.headers.location;

            const isRedirect = statusCode === 308 || statusCode === 301 || statusCode === 307;
            let passed = false;
            let actualPath = location || 'No redirect';

            if (isRedirect && location) {
                // Normalize location to pathname + hash
                try {
                    if (location.startsWith('http')) {
                        const u = new URL(location);
                        actualPath = u.pathname + u.hash;
                    } else {
                        actualPath = location;
                    }
                } catch (e) { }

                // Strict match check
                passed = actualPath === test.expected;
            }

            resolve({
                url: test.url,
                priority: test.priority,
                expected: test.expected,
                statusCode: statusCode,
                location: location || 'No redirect',
                actualPath: actualPath,
                passed: passed
            });
        });

        req.on('error', (error) => {
            resolve({
                url: test.url,
                priority: test.priority,
                expected: test.expected,
                error: error.message,
                passed: false
            });
        });

        req.end();
    });
}

async function runAllTests() {
    console.log('🧪 Starting Redirect Tests (Strict Mode)...\n');
    console.log('Testing against: http://localhost:3000\n');
    console.log('='.repeat(80));

    const results = [];

    for (const test of testsToRun) {
        const result = await testRedirect(test);
        results.push(result);

        const icon = result.passed ? '✅' : '❌';
        const priority = `[${result.priority}]`;

        console.log(`${icon} ${priority} ${result.url}`);
        console.log(`   Expected: ${result.expected}`);
        console.log(`   Got: ${result.location} (Status: ${result.statusCode})`);

        if (!result.passed) {
            if (result.statusCode === 200) {
                console.log(`   ⚠️  FAILED - Got 200 OK instead of redirect.`);
            } else if (result.location && result.location !== result.expected) {
                console.log(`   ⚠️  FAILED - Redirected to wrong location.`);
            } else {
                console.log(`   ⚠️  FAILED - Check configuration`);
            }
        }
        console.log('');
    }

    console.log('='.repeat(80));

    // Summary
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    const critical = results.filter(r => r.priority === 'CRITICAL');
    const criticalPassed = critical.filter(r => r.passed).length;

    console.log('\n📊 TEST SUMMARY:');
    console.log(`   Total Tests: ${results.length}`);
    console.log(`   ✅ Passed: ${passed}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   🔴 Critical: ${criticalPassed}/${critical.length} passed`);

    if (failed === 0) {
        console.log('\n🎉 ALL TESTS PASSED! Ready for staging deployment.');
    } else {
        console.log('\n⚠️  SOME TESTS FAILED! Fix issues before deploying.');
        console.log('\nFailed tests:');
        results.filter(r => !r.passed).forEach(r => {
            console.log(`   - ${r.url} → Expected: ${r.expected} | Got: ${r.actualPath}`);
        });
    }

    return { passed, failed, criticalPassed, criticalTotal: critical.length };
}

runAllTests().then(summary => {
    if (summary.failed > 0) {
        process.exit(1);
    }
});
