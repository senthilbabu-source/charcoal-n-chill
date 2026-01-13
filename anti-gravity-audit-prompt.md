# Website Audit & Consistency Review Prompt for Anti-Gravity

## Objective
Perform a comprehensive audit of the completed Anti-Gravity website to identify and document any inconsistencies in design, performance gaps, accessibility issues, or SEO deficiencies across all pages. Ensure every page meets the required standards and maintains visual and functional consistency.

---

## 1. Design Consistency Audit

### Review Across ALL Pages

**Typography Consistency Check:**
- [ ] Document all font families used across the site
- [ ] Verify consistent font sizes for equivalent elements (H1, H2, H3, body text, etc.)
- [ ] Check line-height consistency for similar text elements
- [ ] Identify any pages with different font weights for the same element type
- [ ] Flag pages with font sizes below 16px for body text
- [ ] Document any typography inconsistencies between pages

**Color System Analysis:**
- [ ] Extract all colors used across the website (backgrounds, text, borders, buttons)
- [ ] Identify if color usage is consistent (e.g., primary CTA always same color)
- [ ] Check if link colors are consistent across all pages
- [ ] Verify button color schemes match across pages
- [ ] Flag any pages using different color palettes
- [ ] Test all text/background color combinations for WCAG AAA contrast (7:1 for normal, 4.5:1 for large)
- [ ] Document color inconsistencies with specific page examples

**Spacing & Layout Consistency:**
- [ ] Measure padding/margins on equivalent components across pages
- [ ] Check if spacing follows a consistent scale (e.g., 8px grid)
- [ ] Verify section spacing is uniform across pages
- [ ] Check container widths for consistency
- [ ] Document any spacing inconsistencies with screenshots

**Component Consistency:**
- [ ] Compare button styles across all pages (size, padding, border-radius, hover states)
- [ ] Check form input styling consistency
- [ ] Verify card components use same design patterns
- [ ] Compare navigation styling across pages
- [ ] Check footer consistency
- [ ] Verify icon usage and sizing is consistent
- [ ] Document component variations with page-by-page breakdown

---

## 2. Responsive Design & Cross-Device Audit

### Test Each Page At Multiple Breakpoints

**Device Testing Matrix:**
- [ ] Mobile (320px, 375px, 414px)
- [ ] Tablet (768px, 1024px)
- [ ] Desktop (1280px, 1440px, 1920px)

**For Each Page, Verify:**
- [ ] Layout doesn't break at any breakpoint
- [ ] Text remains readable at all sizes
- [ ] Images scale properly without distortion
- [ ] Navigation is functional and accessible on mobile
- [ ] Touch targets are minimum 44x44px on mobile
- [ ] Horizontal scrolling doesn't occur unintentionally
- [ ] Content hierarchy remains clear at all sizes
- [ ] All interactive elements are usable on touch devices

**Browser Compatibility Check (Each Page):**
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Edge (desktop)
- [ ] Samsung Internet (mobile)

**Document:**
- Pages with responsive issues
- Specific breakpoints where layout breaks
- Browser-specific rendering problems
- Inconsistent mobile vs desktop experiences

---

## 3. Page Speed Performance Audit

### Run Lighthouse/PageSpeed Insights on EVERY Page

**For Each Page, Document:**
- Mobile Performance Score (/100)
- Desktop Performance Score (/100)
- Specific performance issues identified
- Opportunities for improvement

**Required Scores:**
- Performance: 90+ (both mobile & desktop)
- If below 90, list specific reasons

**Performance Checklist Per Page:**
- [ ] Images properly optimized (WebP/AVIF format)
- [ ] Images have appropriate dimensions (not oversized)
- [ ] Lazy loading implemented for below-fold images
- [ ] CSS is minified
- [ ] JavaScript is minified and deferred/async
- [ ] Fonts are optimized (preloaded if critical)
- [ ] No render-blocking resources
- [ ] Properly leveraging browser caching
- [ ] No excessive DOM size
- [ ] Third-party scripts minimized

**Core Web Vitals Per Page:**
- LCP (target: <2.5s)
- FID/INP (target: <100ms)
- CLS (target: <0.1)

**Create Matrix:**
| Page | Mobile Perf | Desktop Perf | LCP | CLS | Issues |
|------|-------------|--------------|-----|-----|--------|
| Home | | | | | |
| About | | | | | |
| etc. | | | | | |

---

## 4. Best Practices Compliance Audit

### Run Lighthouse Best Practices on Every Page

**Required Score:** 100/100 (both mobile & desktop)

**For Each Page, Check:**
- [ ] No browser console errors
- [ ] HTTPS implemented correctly
- [ ] No mixed content warnings
- [ ] Images have correct aspect ratios
- [ ] No deprecated APIs used
- [ ] External links use `rel="noopener"` or `rel="noreferrer"`
- [ ] No vulnerable libraries detected
- [ ] Proper document type declared
- [ ] Charset declared in meta tag
- [ ] Viewport meta tag present and correct

**Document:**
- Pages with best practices score below 100
- Specific violations found
- Console errors/warnings per page

---

## 5. Accessibility Compliance Audit

### Run Lighthouse Accessibility + Manual Testing on Every Page

**Required Score:** 100/100 (both mobile & desktop)

**Automated Testing Per Page:**
- [ ] Run Lighthouse accessibility audit
- [ ] Run axe DevTools
- [ ] Run WAVE browser extension
- [ ] Document all flagged issues

**Manual Accessibility Testing Per Page:**

**Keyboard Navigation:**
- [ ] Tab through entire page - all interactive elements reachable
- [ ] Focus indicators visible on all elements
- [ ] Logical tab order
- [ ] Skip links present (if needed)
- [ ] No keyboard traps
- [ ] Modal dialogs trap focus properly (if applicable)

**Screen Reader Testing:**
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] All images have descriptive alt text
- [ ] Form inputs have proper labels
- [ ] Error messages are announced
- [ ] Page structure makes sense when read aloud
- [ ] ARIA labels used appropriately

**Visual Accessibility:**
- [ ] Color contrast ratios meet WCAG AAA (7:1 normal, 4.5:1 large)
- [ ] Content doesn't rely solely on color to convey meaning
- [ ] Text resizable to 200% without loss of functionality
- [ ] No text in images (unless decorative)

**Semantic HTML:**
- [ ] Proper heading hierarchy (single H1, no skipped levels)
- [ ] Semantic elements used (`<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- [ ] Lists use proper list markup
- [ ] Tables have proper headers (if applicable)

**Forms (if applicable):**
- [ ] All inputs have associated labels
- [ ] Error messages clearly associated with fields
- [ ] Required fields indicated
- [ ] Field instructions provided

**Motion & Animation:**
- [ ] Respects `prefers-reduced-motion` setting
- [ ] No auto-playing videos without controls
- [ ] Animations don't cause seizures (no rapid flashing)

**Create Accessibility Report:**
| Page | Lighthouse Score | Issues Found | Severity | Status |
|------|-----------------|--------------|----------|---------|
| Home | | | | |
| About | | | | |

---

## 6. SEO Audit

### Run Lighthouse SEO on Every Page

**Required Score:** 100/100 (both mobile & desktop)

**Technical SEO Checklist Per Page:**

**Meta Tags:**
- [ ] `<title>` tag present and unique (50-60 characters)
- [ ] Meta description present and unique (150-160 characters)
- [ ] Viewport meta tag correct
- [ ] Charset declared
- [ ] Canonical URL specified
- [ ] Language attribute on `<html>` tag
- [ ] Open Graph tags present (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags present

**Content Structure:**
- [ ] Single H1 tag present and descriptive
- [ ] Heading hierarchy logical (H1→H2→H3, no skipped levels)
- [ ] All images have alt text (descriptive, not keyword-stuffed)
- [ ] URLs are descriptive and use hyphens
- [ ] No broken links (404s)
- [ ] Internal linking structure logical

**Mobile SEO:**
- [ ] Mobile-friendly (responsive)
- [ ] Text readable without zooming
- [ ] Tap targets appropriately sized
- [ ] No horizontal scrolling

**Indexing:**
- [ ] Robots.txt present and correct
- [ ] XML sitemap exists and is submitted
- [ ] Pages not blocked from indexing (unless intentional)
- [ ] Structured data implemented (Schema.org JSON-LD if applicable)

**Create SEO Report:**
| Page | SEO Score | Title | Meta Desc | H1 | Issues |
|------|-----------|-------|-----------|-----|--------|
| Home | | | | | |
| About | | | | | |

---

## 7. Comprehensive Audit Report Structure

Create a detailed report with the following sections:

### Executive Summary
- Total pages audited
- Overall compliance status (meeting/not meeting requirements)
- Critical issues count
- High-priority recommendations

### Design Consistency Findings
- Typography inconsistencies (with examples)
- Color usage variations (with examples)
- Spacing/layout discrepancies (with screenshots)
- Component styling differences (with page references)
- **Recommendations for standardization**

### Performance Analysis
- Page-by-page performance scores
- Pages below 90 threshold
- Common performance bottlenecks
- **Specific optimization recommendations**

### Accessibility Issues
- Critical accessibility violations
- Pages failing accessibility standards
- WCAG compliance gaps
- **Remediation priorities and solutions**

### SEO Gaps
- Missing or duplicate meta tags
- Content structure issues
- Pages with SEO scores below 100
- **SEO improvement action items**

### Cross-Device/Browser Issues
- Responsive design problems
- Browser-specific bugs
- Device-specific rendering issues
- **Compatibility fixes needed**

### Action Plan
Prioritized list of fixes:
1. **Critical** (breaks functionality/accessibility)
2. **High** (impacts scores significantly)
3. **Medium** (inconsistencies, minor score impacts)
4. **Low** (nice-to-have improvements)

---

## Audit Deliverables

1. **Consistency Matrix**: Spreadsheet showing design element usage across all pages
2. **Performance Dashboard**: Lighthouse scores for all pages (mobile & desktop)
3. **Accessibility Report**: Detailed WCAG compliance status per page
4. **SEO Scorecard**: Meta tag inventory and SEO metrics per page
5. **Screenshots**: Visual documentation of inconsistencies
6. **Prioritized Fix List**: Actionable items ranked by impact

---

## Tools Required for Audit

- Chrome DevTools + Lighthouse
- Firefox Developer Tools
- Safari Web Inspector
- PageSpeed Insights
- axe DevTools extension
- WAVE browser extension
- Screen reader (NVDA or VoiceOver)
- W3C HTML/CSS Validators
- Responsive design testing tools
- Color contrast checker

---

## Success Criteria

The audit is complete when:
- [ ] Every page has been tested on mobile and desktop
- [ ] All Lighthouse scores documented
- [ ] Design inconsistencies catalogued with examples
- [ ] Accessibility issues identified and prioritized
- [ ] Performance bottlenecks documented
- [ ] SEO gaps listed per page
- [ ] Cross-browser issues noted
- [ ] Actionable recommendations provided for each finding
- [ ] Pages scoring below requirements are clearly flagged
- [ ] Fix priority determined for all issues

---

## Required Benchmark Scores

### Non-Negotiable Standards (Both Mobile & Desktop)
- **SEO**: 100/100 ✓ REQUIRED
- **Accessibility**: 100/100 ✓ REQUIRED
- **Best Practices**: 100/100 ✓ REQUIRED
- **Performance**: 90+/100 ✓ ACCEPTABLE

Any page falling below these thresholds must be flagged for immediate remediation.