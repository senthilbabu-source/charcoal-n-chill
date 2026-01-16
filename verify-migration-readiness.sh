#!/bin/bash

# Pre-Migration Verification Script
# Run this in Antigravity to confirm everything is ready

echo "🔍 PRE-MIGRATION VERIFICATION CHECKLIST"
echo "========================================"
echo ""

# Track overall status
ISSUES=0

# 1. Check if Next.js project exists
echo "1️⃣ Verifying Next.js project structure..."
if [ -f "package.json" ] && [ -f "next.config.ts" ]; then
    echo "   ✅ Next.js project found"
else
    echo "   ❌ ERROR: Not in Next.js project root"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# 2. Check image migration
echo "2️⃣ Verifying image migration..."
if [ -d "public/images" ]; then
    IMAGE_COUNT=$(ls -1 public/images/ 2>/dev/null | wc -l)
    echo "   ✅ /public/images/ directory exists"
    echo "   📊 Image count: $IMAGE_COUNT files"
    
    # Allow for some existing images (807 + pre-existing)
    if [ "$IMAGE_COUNT" -eq 807 ]; then
        echo "   ✅ PERFECT: Exactly 807 images as expected"
    elif [ "$IMAGE_COUNT" -gt 807 ]; then
        echo "   ✅ SUCCESS: $IMAGE_COUNT images found (807 migrated + existing assets)"
    elif [ "$IMAGE_COUNT" -gt 800 ] && [ "$IMAGE_COUNT" -lt 870 ]; then
        echo "   ⚠️  WARNING: $IMAGE_COUNT images (expected ~807)"
    else
        echo "   ❌ ERROR: $IMAGE_COUNT images (expected >800)"
        ISSUES=$((ISSUES + 1))
    fi
    
    # Check for sample images
    echo ""
    echo "   🔍 Spot-checking sample images..."
    SAMPLE_IMAGES=("DSC01555.jpg" "DSC01555-300x300.jpg" "monk.jpg" "Logo-Gif.gif")
    FOUND=0
    for img in "${SAMPLE_IMAGES[@]}"; do
        if [ -f "public/images/$img" ]; then
            SIZE=$(stat -f%z "public/images/$img" 2>/dev/null || stat -c%s "public/images/$img" 2>/dev/null)
            echo "   ✅ $img exists (${SIZE} bytes)"
            FOUND=$((FOUND + 1))
        else
            echo "   ⚠️  $img not found (may not exist in your set)"
        fi
    done
else
    echo "   ❌ ERROR: /public/images/ directory not found"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# 3. Check redirect configuration
echo "3️⃣ Verifying redirect configuration..."
if [ -f "next.config.ts" ]; then
    echo "   ✅ next.config.ts found"
    
    # Check for critical redirect patterns
    echo "   🔍 Checking for critical redirect patterns..."
    
    if grep -q "wp-content/uploads" next.config.ts; then
        echo "   ✅ Image redirect pattern found (wp-content/uploads)"
    else
        echo "   ❌ ERROR: Image redirect pattern missing"
        ISSUES=$((ISSUES + 1))
    fi
    
    if grep -q "/tease" next.config.ts; then
        echo "   ✅ Menu redirects found (/tease, etc.)"
    else
        echo "   ⚠️  WARNING: Menu redirects may be missing"
    fi
    
    if grep -q "/about-us" next.config.ts; then
        echo "   ✅ Core page redirects found (/about-us, etc.)"
    else
        echo "   ⚠️  WARNING: Core page redirects may be missing"
    fi
else
    echo "   ❌ ERROR: next.config.ts not found"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# 4. Check if dev server can start
echo "4️⃣ Checking if dev server dependencies are installed..."
if [ -d "node_modules" ]; then
    echo "   ✅ node_modules exists"
else
    echo "   ⚠️  WARNING: node_modules not found (run: npm install)"
fi
echo ""

# 5. Check for test script
echo "5️⃣ Verifying test script exists..."
if [ -f "test-redirects-with-images.js" ]; then
    echo "   ✅ test-redirects-with-images.js found"
else
    echo "   ⚠️  WARNING: Test script not found in project root"
fi
echo ""

# 6. List all images (first 20 for verification)
echo "6️⃣ Sample of migrated images (first 20)..."
if [ -d "public/images" ]; then
    ls -lh public/images/ | head -20
else
    echo "   ❌ Cannot list images - directory not found"
fi
echo ""

# 7. Check image file types
echo "7️⃣ Checking image file types..."
if [ -d "public/images" ]; then
    echo "   📊 File type breakdown:"
    echo "   .jpg files: $(ls public/images/*.jpg 2>/dev/null | wc -l)"
    echo "   .png files: $(ls public/images/*.png 2>/dev/null | wc -l)"
    echo "   .gif files: $(ls public/images/*.gif 2>/dev/null | wc -l)"
    echo "   .webp files: $(ls public/images/*.webp 2>/dev/null | wc -l)"
fi
echo ""

# 8. Calculate total image size
echo "8️⃣ Calculating total image storage..."
if [ -d "public/images" ]; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        TOTAL_SIZE=$(du -sh public/images/ | cut -f1)
    else
        # Linux
        TOTAL_SIZE=$(du -sh public/images/ | cut -f1)
    fi
    echo "   📦 Total size: $TOTAL_SIZE"
    echo "   ℹ️  Expected: ~200MB for 807 images"
fi
echo ""

# Final Summary
echo "========================================"
echo "📊 VERIFICATION SUMMARY"
echo "========================================"
echo ""

if [ $ISSUES -eq 0 ]; then
    echo "🎉 ALL CHECKS PASSED!"
    echo ""
    echo "✅ Next.js project configured correctly"
    echo "✅ Images migrated successfully"
    echo "✅ Redirects configured"
    echo "✅ Ready for redirect testing"
    echo ""
    echo "📋 NEXT STEPS:"
    echo "   1. Start dev server: npm run dev"
    echo "   2. Run tests: node test-redirects-with-images.js"
    echo "   3. Verify all tests pass"
    echo "   4. Proceed with DNS migration"
    echo ""
    exit 0
else
    echo "⚠️  FOUND $ISSUES CRITICAL ISSUE(S)"
    echo ""
    echo "❌ Fix the errors above before proceeding"
    echo ""
    echo "📋 TROUBLESHOOTING:"
    echo "   - Verify you're in the correct project directory"
    echo "   - Check image migration completed"
    echo "   - Verify next.config.ts has redirect rules"
    echo "   - Run: npm install (if node_modules missing)"
    echo ""
    exit 1
fi
