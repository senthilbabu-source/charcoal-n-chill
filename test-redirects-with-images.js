/* eslint-disable */
const http = require('http');

const testsToRun = [
    // ========================================
    // IMAGE REDIRECTS (Critical for SEO!)
    // ========================================
    // Test old WordPress image paths redirect to new /images/ location
    // Using real file DSC01555.jpg derived from earlier verification
    { url: '/wp-content/uploads/2023/10/DSC01555.jpg', expected: '/images/DSC01555.jpg', priority: 'CRITICAL', type: 'image' },
    { url: '/wp-content/uploads/2023/10/DSC01555-300x300.jpg', expected: '/images/DSC01555-300x300.jpg', priority: 'CRITICAL', type: 'image' },

    // Generic pattern tests
    { url: '/wp-content/uploads/2022/01/sample.jpg', expected: '/images/sample.jpg', priority: 'HIGH', type: 'image' },
    { url: '/wp-content/uploads/2023/12/sample.png', expected: '/images/sample.png', priority: 'HIGH', type: 'image' },

    // Test with and without trailing slashes
    { url: '/wp-content/uploads/2024/01/test.jpg/', expected: '/images/test.jpg', priority: 'HIGH', type: 'image' },

    // ========================================
    // PAGE REDIRECTS (Previously Verified)
    // ========================================
    // Critical WordPress menu URLs
    { url: '/tease', expected: '/menu#appetizers', priority: 'CRITICAL' },
    { url: '/tease/', expected: '/menu#appetizers', priority: 'CRITICAL' },
    { url: '/bigbites', expected: '/menu#entrees', priority: 'CRITICAL' },
    { url: '/cloudreverie', expected: '/menu#hookah', priority: 'CRITICAL' },
    { url: '/bottlevibes', expected: '/menu#cocktails', priority: 'CRITICAL' },

    // Core pages
    { url: '/about-us', expected: '/about', priority: 'CRITICAL' },
    { url: '/contact-us', expected: '/contact', priority: 'CRITICAL' },
    { url: '/venue', expected: '/private-events', priority: 'CRITICAL' },

    // Old pages
    { url: '/hookah-lounge', expected: '/menu#hookah', priority: 'HIGH' },
];

// REAL images found in the public/images folder during migration
const imageAccessibilityTests = [
    '/images/DSC01555.jpg',
    '/images/DSC01555-300x300.jpg',
    '/images/01.jpg',
    '/images/01-150x150.jpg'
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

        const req = http.request(options, (res) => {
            const statusCode = res.statusCode;
            const location = res.headers.location;

            const isRedirect = statusCode === 308 || statusCode === 301 || statusCode === 307;
            let passed = false;
            let actualPath = location || 'No redirect';

            if (isRedirect && location) {
                try {
                    if (location.startsWith('http')) {
                        const u = new URL(location);
                        actualPath = u.pathname + u.hash;
                    } else {
                        actualPath = location;
                    }
                } catch (e) { }

                passed = actualPath === test.expected;
            }

            resolve({
                url: test.url,
                priority: test.priority,
                expected: test.expected,
                statusCode: statusCode,
                location: location || 'No redirect',
                type: test.type || 'page',
                passed: passed
            });
        });

        req.on('error', (error) => {
            resolve({
                url: test.url,
                priority: test.priority,
                expected: test.expected,
                error: error.message,
                type: test.type || 'page',
                passed: false
            });
        });

        req.end();
    });
}

async function testImageAccessibility(imagePath) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'localhost',
            port: 3000,
            path: imagePath,
            method: 'HEAD',
            headers: { 'User-Agent': 'Image-Checker' }
        };

        const req = http.request(options, (res) => {
            const statusCode = res.statusCode;
            const contentType = res.headers['content-type'];
            const contentLength = res.headers['content-length'];

            const passed = statusCode === 200 &&
                contentType && contentType.startsWith('image/') &&
                contentLength && parseInt(contentLength) > 0;

            resolve({
                path: imagePath,
                statusCode: statusCode,
                contentType: contentType || 'unknown',
                size: contentLength ? `${(parseInt(contentLength) / 1024).toFixed(2)} KB` : 'unknown',
                passed: passed
            });
        });

        req.on('error', (error) => {
            resolve({
                path: imagePath,
                error: error.message,
                passed: false
            });
        });

        req.end();
    });
}

async function runAllTests() {
    console.log('🧪 Starting Redirect Tests with Image Verification...\n');
    console.log('Testing against: http://localhost:3000\n');
    console.log('='.repeat(100));

    // Test redirects
    console.log('\n📄 TESTING PAGE & IMAGE REDIRECTS:\n');
    const results = [];

    for (const test of testsToRun) {
        const result = await testRedirect(test);
        results.push(result);

        const icon = result.passed ? '✅' : '❌';
        const priority = `[${result.priority}]`;
        const typeLabel = result.type === 'image' ? '🖼️' : '📄';

        console.log(`${icon} ${typeLabel} ${priority} ${result.url}`);
        console.log(`   Expected: ${result.expected}`);
        console.log(`   Got: ${result.location} (Status: ${result.statusCode})`);

        if (!result.passed) {
            console.log(`   ⚠️  FAILED - Check configuration`);
        }
        console.log('');
    }

    console.log('='.repeat(100));

    // Test actual image file accessibility
    console.log('\n🖼️  TESTING IMAGE FILE ACCESSIBILITY:\n');
    const imageResults = [];

    for (const imagePath of imageAccessibilityTests) {
        const result = await testImageAccessibility(imagePath);
        imageResults.push(result);

        const icon = result.passed ? '✅' : '❌';

        console.log(`${icon} ${result.path}`);
        console.log(`   Status: ${result.statusCode}`);
        console.log(`   Type: ${result.contentType}`);
        console.log(`   Size: ${result.size}`);

        if (!result.passed) {
            console.log(`   ⚠️  FAILED - Image file missing or invalid`);
        }
        console.log('');
    }

    console.log('='.repeat(100));

    // Summary
    const passed = results.filter(r => r.passed).length;
    const failed = results.filter(r => !r.passed).length;
    const critical = results.filter(r => r.priority === 'CRITICAL');
    const criticalPassed = critical.filter(r => r.passed).length;

    const imagesPassed = imageResults.filter(r => r.passed).length;
    const imagesFailed = imageResults.filter(r => !r.passed).length;

    // Separate page and image redirect stats
    const pageRedirects = results.filter(r => r.type !== 'image');
    const imageRedirects = results.filter(r => r.type === 'image');
    const pagesPassed = pageRedirects.filter(r => r.passed).length;
    const imageRedirectsPassed = imageRedirects.filter(r => r.passed).length;

    console.log('\n📊 TEST SUMMARY:');
    console.log('\nREDIRECTS:');
    console.log(`   Total Tests: ${results.length}`);
    console.log(`   ✅ Passed: ${passed}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   🔴 Critical: ${criticalPassed}/${critical.length} passed`);
    console.log(`\n   📄 Page Redirects: ${pagesPassed}/${pageRedirects.length} passed`);
    console.log(`   🖼️  Image Redirects: ${imageRedirectsPassed}/${imageRedirects.length} passed`);

    console.log('\nIMAGE ACCESSIBILITY:');
    console.log(`   Total Images Tested: ${imageResults.length}`);
    console.log(`   ✅ Accessible: ${imagesPassed}`);
    console.log(`   ❌ Missing/Invalid: ${imagesFailed}`);

    const allPassed = failed === 0 && imagesFailed === 0;

    if (allPassed) {
        console.log('\n🎉 ALL TESTS PASSED! Ready for staging deployment.');
        console.log('✅ All page redirects working');
        console.log('✅ All image redirects working');
        console.log('✅ Image files accessible');
    } else {
        console.log('\n⚠️  SOME TESTS FAILED! Fix issues before deploying.');

        if (failed > 0) {
            console.log('\n❌ Failed redirect tests:');
            results.filter(r => !r.passed).forEach(r => {
                const typeLabel = r.type === 'image' ? '🖼️' : '📄';
                console.log(`   ${typeLabel} ${r.url} → Expected: ${r.expected}`);
            });
        }
    }

    return {
        passed,
        failed,
        allPassed
    };
}

runAllTests().then(summary => {
    if (!summary.allPassed) {
        process.exit(1);
    }
});
