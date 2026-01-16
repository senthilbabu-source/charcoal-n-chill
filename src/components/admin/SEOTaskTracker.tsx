"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, Calendar, TrendingUp, Target, AlertCircle, Star, FileText, Users, MapPin } from 'lucide-react';

const ICON_MAP: any = {
    MapPin,
    Users,
    FileText,
    Target,
    Star,
    TrendingUp
};

const SEOTaskTracker = () => {
    const INITIAL_TASKS = {
        googleBusiness: {
            name: 'Google Business Profile Optimization',
            priority: 'CRITICAL',
            icon: 'MapPin',
            color: 'bg-red-500',
            expanded: true,
            tasks: [
                {
                    id: 'gbp-1',
                    title: 'Initial Setup',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-1-1', title: 'Claim/verify Google Business Profile for "Charcoal N Chill"', completed: false, notes: '' },
                        { id: 'gbp-1-2', title: 'Select primary category: "Hookah Lounge"', completed: false, notes: '' },
                        { id: 'gbp-1-3', title: 'Add secondary categories: Indian Restaurant, Cocktail Bar, Event Venue', completed: false, notes: '' },
                        { id: 'gbp-1-4', title: 'Complete business description (750 chars max)', completed: false, notes: '' },
                        { id: 'gbp-1-5', title: 'Add business hours (including special hours)', completed: false, notes: '' },
                        { id: 'gbp-1-6', title: 'Add service area (Alpharetta, Johns Creek, Roswell, etc.)', completed: false, notes: '' },
                        { id: 'gbp-1-7', title: 'Set up appointment booking link', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-2',
                    title: 'Photos & Media',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-2-1', title: 'Upload logo (720x720px)', completed: false, notes: '' },
                        { id: 'gbp-2-2', title: 'Upload cover photo (1024x576px)', completed: false, notes: '' },
                        { id: 'gbp-2-3', title: 'Upload 5+ interior photos', completed: false, notes: '' },
                        { id: 'gbp-2-4', title: 'Upload 5+ food photos', completed: false, notes: '' },
                        { id: 'gbp-2-5', title: 'Upload 5+ hookah setup photos', completed: false, notes: '' },
                        { id: 'gbp-2-6', title: 'Upload 5+ event/entertainment photos', completed: false, notes: '' },
                        { id: 'gbp-2-7', title: 'Upload team/staff photos', completed: false, notes: '' },
                        { id: 'gbp-2-8', title: 'Add 360° virtual tour (optional)', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-3',
                    title: 'Menu & Products',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-3-1', title: 'Add hookah menu with prices', completed: false, notes: '' },
                        { id: 'gbp-3-2', title: 'Add food menu - appetizers with prices', completed: false, notes: '' },
                        { id: 'gbp-3-3', title: 'Add food menu - entrees with prices', completed: false, notes: '' },
                        { id: 'gbp-3-4', title: 'Add drinks/cocktails menu with prices', completed: false, notes: '' },
                        { id: 'gbp-3-5', title: 'Add desserts menu with prices', completed: false, notes: '' },
                        { id: 'gbp-3-6', title: 'Link to full online menu', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-4',
                    title: 'Attributes & Features',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-4-1', title: 'Enable messaging', completed: false, notes: '' },
                        { id: 'gbp-4-2', title: 'Enable Q&A section', completed: false, notes: '' },
                        { id: 'gbp-4-3', title: 'Add attribute: Free parking', completed: false, notes: '' },
                        { id: 'gbp-4-4', title: 'Add attribute: Wi-Fi available', completed: false, notes: '' },
                        { id: 'gbp-4-5', title: 'Add attribute: Live music', completed: false, notes: '' },
                        { id: 'gbp-4-6', title: 'Add attribute: Late-night food', completed: false, notes: '' },
                        { id: 'gbp-4-7', title: 'Add attribute: Full bar', completed: false, notes: '' },
                        { id: 'gbp-4-8', title: 'Add attribute: Vegetarian options', completed: false, notes: '' },
                        { id: 'gbp-4-9', title: 'Add attribute: Outdoor seating (if applicable)', completed: false, notes: '' },
                        { id: 'gbp-4-10', title: 'Add attribute: Wheelchair accessible', completed: false, notes: '' },
                        { id: 'gbp-4-11', title: 'Add attribute: LGBTQ+ friendly', completed: false, notes: '' },
                        { id: 'gbp-4-12', title: 'Add attribute: Good for groups', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-5',
                    title: 'Posts & Updates (Ongoing)',
                    ongoing: true,
                    frequency: '2x per week',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-5-1', title: 'Monday: Weekend recap with photos', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-5-2', title: 'Wednesday: Upcoming weekend events announcement', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-5-3', title: 'Friday: Daily special or happy hour', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-5-4', title: 'Create post template library', completed: false, notes: '' },
                        { id: 'gbp-5-5', title: 'Schedule posts in advance', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-6',
                    title: 'Review Management (Ongoing)',
                    ongoing: true,
                    frequency: 'Daily',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-6-1', title: 'Set up review notifications', completed: false, notes: '' },
                        { id: 'gbp-6-2', title: 'Create review response templates', completed: false, notes: '' },
                        { id: 'gbp-6-3', title: 'Respond to reviews within 24 hours', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-6-4', title: 'Flag inappropriate reviews', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-6-5', title: 'Generate review request QR codes', completed: false, notes: '' },
                        { id: 'gbp-6-6', title: 'Train staff on asking for reviews', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-7',
                    title: 'Q&A Management (Ongoing)',
                    ongoing: true,
                    frequency: 'Daily',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-7-1', title: 'Answer all questions within 24 hours', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-7-2', title: 'Add 10 pre-emptive Q&A pairs', completed: false, notes: '' },
                        { id: 'gbp-7-3', title: 'Monitor for spam questions', ongoing: true, completed: false, notes: '' },
                    ]
                },
                {
                    id: 'gbp-8',
                    title: 'Analytics & Optimization',
                    ongoing: true,
                    frequency: 'Weekly',
                    completed: false,
                    subtasks: [
                        { id: 'gbp-8-1', title: 'Check insights weekly', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-8-2', title: 'Track search queries', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-8-3', title: 'Monitor direction requests', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-8-4', title: 'Track phone calls', ongoing: true, completed: false, notes: '' },
                        { id: 'gbp-8-5', title: 'Optimize based on performance data', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        },

        localCitations: {
            name: 'Local Citations & NAP Consistency',
            priority: 'HIGH',
            icon: 'Users',
            color: 'bg-orange-500',
            expanded: true,
            tasks: [
                {
                    id: 'cit-1',
                    title: 'Tier 1 - Essential Platforms',
                    completed: false,
                    subtasks: [
                        { id: 'cit-1-1', title: 'Google Business Profile', completed: false, notes: '', url: 'https://business.google.com' },
                        { id: 'cit-1-2', title: 'Yelp for Business', completed: false, notes: '', url: 'https://biz.yelp.com' },
                        { id: 'cit-1-3', title: 'Facebook Business Page', completed: false, notes: '', url: 'https://business.facebook.com' },
                        { id: 'cit-1-4', title: 'Apple Maps (Apple Business Connect)', completed: false, notes: '', url: 'https://register.apple.com/business' },
                        { id: 'cit-1-5', title: 'Bing Places', completed: false, notes: '', url: 'https://www.bingplaces.com' },
                        { id: 'cit-1-6', title: 'TripAdvisor', completed: false, notes: '', url: 'https://www.tripadvisor.com/Owners' },
                    ]
                },
                {
                    id: 'cit-2',
                    title: 'Tier 2 - Restaurant Platforms',
                    completed: false,
                    subtasks: [
                        { id: 'cit-2-1', title: 'OpenTable', completed: false, notes: '', url: 'https://restaurant.opentable.com' },
                        { id: 'cit-2-2', title: 'Resy', completed: false, notes: '', url: 'https://resy.com/restaurant-solutions' },
                        { id: 'cit-2-3', title: 'DoorDash (if delivery)', completed: false, notes: '', url: 'https://get.doordash.com' },
                        { id: 'cit-2-4', title: 'Grubhub (if delivery)', completed: false, notes: '', url: 'https://get.grubhub.com' },
                        { id: 'cit-2-5', title: 'Uber Eats (if delivery)', completed: false, notes: '', url: 'https://restaurants.ubereats.com' },
                        { id: 'cit-2-6', title: 'Toast (POS/ordering)', completed: false, notes: '', url: 'https://pos.toasttab.com' },
                        { id: 'cit-2-7', title: 'ChowNow', completed: false, notes: '', url: 'https://get.chownow.com' },
                        { id: 'cit-2-8', title: 'Zomato', completed: false, notes: '', url: 'https://www.zomato.com/business' },
                        { id: 'cit-2-9', title: 'FourSquare', completed: false, notes: '', url: 'https://business.foursquare.com' },
                    ]
                },
                {
                    id: 'cit-3',
                    title: 'Tier 3 - Local Directories',
                    completed: false,
                    subtasks: [
                        { id: 'cit-3-1', title: 'YellowPages', completed: false, notes: '', url: 'https://www.yellowpages.com' },
                        { id: 'cit-3-2', title: 'Manta', completed: false, notes: '', url: 'https://www.manta.com' },
                        { id: 'cit-3-3', title: 'Hotfrog', completed: false, notes: '', url: 'https://www.hotfrog.com' },
                        { id: 'cit-3-4', title: 'Local.com', completed: false, notes: '', url: 'https://www.local.com' },
                        { id: 'cit-3-5', title: 'MerchantCircle', completed: false, notes: '', url: 'https://www.merchantcircle.com' },
                        { id: 'cit-3-6', title: 'Nextdoor Business', completed: false, notes: '', url: 'https://business.nextdoor.com' },
                        { id: 'cit-3-7', title: 'Atlanta Restaurant Guide', completed: false, notes: '' },
                        { id: 'cit-3-8', title: 'Alpharetta Chamber of Commerce', completed: false, notes: '', url: 'https://alpharettachamber.com' },
                        { id: 'cit-3-9', title: 'North Fulton Chamber', completed: false, notes: '' },
                        { id: 'cit-3-10', title: 'Discover Alpharetta', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'cit-4',
                    title: 'Tier 4 - Niche & Local',
                    completed: false,
                    subtasks: [
                        { id: 'cit-4-1', title: 'HookahPlace (hookah directory)', completed: false, notes: '' },
                        { id: 'cit-4-2', title: 'Indian Restaurant listings', completed: false, notes: '' },
                        { id: 'cit-4-3', title: 'Atlanta Event Venues directory', completed: false, notes: '' },
                        { id: 'cit-4-4', title: 'BBB (Better Business Bureau)', completed: false, notes: '', url: 'https://www.bbb.org' },
                        { id: 'cit-4-5', title: 'Angie\'s List', completed: false, notes: '', url: 'https://www.angieslist.com' },
                    ]
                },
                {
                    id: 'cit-5',
                    title: 'NAP Audit & Maintenance',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'cit-5-1', title: 'Audit all citations for NAP consistency', ongoing: true, completed: false, notes: '' },
                        { id: 'cit-5-2', title: 'Update any changed information across all platforms', ongoing: true, completed: false, notes: '' },
                        { id: 'cit-5-3', title: 'Check for duplicate listings', ongoing: true, completed: false, notes: '' },
                        { id: 'cit-5-4', title: 'Monitor new citation opportunities', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        },

        contentMarketing: {
            name: 'Content Marketing & Blog',
            priority: 'MEDIUM',
            icon: 'FileText',
            color: 'bg-blue-500',
            expanded: false,
            tasks: [
                {
                    id: 'content-1',
                    title: 'Blog Post Creation',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'content-1-1', title: 'Write: "Top 10 Hookah Lounges in Atlanta"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-2', title: 'Write: "Ultimate Guide to Alpharetta Nightlife"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-3', title: 'Write: "Indo-American Fusion Food Journey"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-4', title: 'Write: "How to Choose Premium Hookah Flavors"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-5', title: 'Write: "Planning Private Events in Alpharetta"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-6', title: 'Write: "Best Indian Dishes to Try"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-7', title: 'Write: "Hookah Etiquette Guide"', completed: false, notes: '', targetDate: '' },
                        { id: 'content-1-8', title: 'Write: "Behind the Scenes: Our Belly Dancing Shows"', completed: false, notes: '', targetDate: '' },
                    ]
                },
                {
                    id: 'content-2',
                    title: 'Blog SEO Optimization',
                    completed: false,
                    subtasks: [
                        { id: 'content-2-1', title: 'Keyword research for each post', completed: false, notes: '' },
                        { id: 'content-2-2', title: 'Add meta descriptions to all posts', completed: false, notes: '' },
                        { id: 'content-2-3', title: 'Optimize images with alt text', completed: false, notes: '' },
                        { id: 'content-2-4', title: 'Add internal links', completed: false, notes: '' },
                        { id: 'content-2-5', title: 'Add FAQ schema to posts', completed: false, notes: '' },
                        { id: 'content-2-6', title: 'Share posts on social media', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'content-3',
                    title: 'Content Calendar',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'content-3-1', title: 'Plan next 3 months of blog topics', ongoing: true, completed: false, notes: '' },
                        { id: 'content-3-2', title: 'Schedule social media posts', ongoing: true, completed: false, notes: '' },
                        { id: 'content-3-3', title: 'Plan seasonal content (holidays, events)', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        },

        websiteSEO: {
            name: 'Website Technical SEO',
            priority: 'HIGH',
            icon: 'Target',
            color: 'bg-purple-500',
            expanded: false,
            tasks: [
                {
                    id: 'tech-1',
                    title: 'Schema Markup',
                    completed: false,
                    subtasks: [
                        { id: 'tech-1-1', title: 'Add Restaurant schema to homepage', completed: false, notes: '' },
                        { id: 'tech-1-2', title: 'Add Menu schema to menu page', completed: false, notes: '' },
                        { id: 'tech-1-3', title: 'Add Event schema to events page', completed: false, notes: '' },
                        { id: 'tech-1-4', title: 'Add Organization schema', completed: false, notes: '' },
                        { id: 'tech-1-5', title: 'Add Breadcrumb schema', completed: false, notes: '' },
                        { id: 'tech-1-6', title: 'Validate all schema with Rich Results Test', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'tech-2',
                    title: 'Meta Tags & Descriptions',
                    completed: false,
                    subtasks: [
                        { id: 'tech-2-1', title: 'Homepage meta description', completed: false, notes: '' },
                        { id: 'tech-2-2', title: 'Menu page meta description', completed: false, notes: '' },
                        { id: 'tech-2-3', title: 'Events page meta description', completed: false, notes: '' },
                        { id: 'tech-2-4', title: 'About page meta description', completed: false, notes: '' },
                        { id: 'tech-2-5', title: 'Contact page meta description', completed: false, notes: '' },
                        { id: 'tech-2-6', title: 'Private events page meta description', completed: false, notes: '' },
                        { id: 'tech-2-7', title: 'Add OpenGraph tags to all pages', completed: false, notes: '' },
                        { id: 'tech-2-8', title: 'Add Twitter Card tags', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'tech-3',
                    title: 'Image Optimization',
                    completed: false,
                    subtasks: [
                        { id: 'tech-3-1', title: 'Compress all images to <200KB', completed: false, notes: '' },
                        { id: 'tech-3-2', title: 'Convert images to WebP/AVIF', completed: false, notes: '' },
                        { id: 'tech-3-3', title: 'Add location keywords to all alt text', completed: false, notes: '' },
                        { id: 'tech-3-4', title: 'Add blur placeholders', completed: false, notes: '' },
                        { id: 'tech-3-5', title: 'Set priority on hero images', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'tech-4',
                    title: 'Performance Optimization',
                    completed: false,
                    subtasks: [
                        { id: 'tech-4-1', title: 'Configure next.config.js for images', completed: false, notes: '' },
                        { id: 'tech-4-2', title: 'Implement lazy loading', completed: false, notes: '' },
                        { id: 'tech-4-3', title: 'Set up font optimization', completed: false, notes: '' },
                        { id: 'tech-4-4', title: 'Enable compression', completed: false, notes: '' },
                        { id: 'tech-4-5', title: 'Implement PWA (optional)', completed: false, notes: '' },
                        { id: 'tech-4-6', title: 'Achieve Lighthouse Performance 90+', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'tech-5',
                    title: 'Site Structure',
                    completed: false,
                    subtasks: [
                        { id: 'tech-5-1', title: 'Create/verify sitemap.xml', completed: false, notes: '' },
                        { id: 'tech-5-2', title: 'Create/verify robots.txt', completed: false, notes: '' },
                        { id: 'tech-5-3', title: 'Add canonical URLs', completed: false, notes: '' },
                        { id: 'tech-5-4', title: 'Set up 301 redirects', completed: false, notes: '' },
                        { id: 'tech-5-5', title: 'Submit sitemap to Google Search Console', completed: false, notes: '' },
                        { id: 'tech-5-6', title: 'Submit sitemap to Bing Webmaster', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'tech-6',
                    title: 'Monthly Audits',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'tech-6-1', title: 'Run Lighthouse audit', ongoing: true, completed: false, notes: '' },
                        { id: 'tech-6-2', title: 'Check Google Search Console', ongoing: true, completed: false, notes: '' },
                        { id: 'tech-6-3', title: 'Review Core Web Vitals', ongoing: true, completed: false, notes: '' },
                        { id: 'tech-6-4', title: 'Fix any broken links', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        },

        reviewGeneration: {
            name: 'Review Generation Strategy',
            priority: 'HIGH',
            icon: 'Star',
            color: 'bg-yellow-500',
            expanded: false,
            tasks: [
                {
                    id: 'review-1',
                    title: 'Review Systems Setup',
                    completed: false,
                    subtasks: [
                        { id: 'review-1-1', title: 'Create QR codes for Google reviews', completed: false, notes: '' },
                        { id: 'review-1-2', title: 'Design table tents with QR codes', completed: false, notes: '' },
                        { id: 'review-1-3', title: 'Add review links to receipts', completed: false, notes: '' },
                        { id: 'review-1-4', title: 'Set up email/SMS follow-up system', completed: false, notes: '' },
                        { id: 'review-1-5', title: 'Create review incentive program', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'review-2',
                    title: 'Staff Training',
                    completed: false,
                    subtasks: [
                        { id: 'review-2-1', title: 'Train staff on when to ask for reviews', completed: false, notes: '' },
                        { id: 'review-2-2', title: 'Create review request script', completed: false, notes: '' },
                        { id: 'review-2-3', title: 'Incentivize staff for review generation', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'review-3',
                    title: 'Review Management (Ongoing)',
                    ongoing: true,
                    frequency: 'Daily',
                    completed: false,
                    subtasks: [
                        { id: 'review-3-1', title: 'Monitor all review platforms daily', ongoing: true, completed: false, notes: '' },
                        { id: 'review-3-2', title: 'Respond to Google reviews within 24 hours', ongoing: true, completed: false, notes: '' },
                        { id: 'review-3-3', title: 'Respond to Yelp reviews within 24 hours', ongoing: true, completed: false, notes: '' },
                        { id: 'review-3-4', title: 'Respond to Facebook reviews within 24 hours', ongoing: true, completed: false, notes: '' },
                        { id: 'review-3-5', title: 'Address negative reviews professionally', ongoing: true, completed: false, notes: '' },
                        { id: 'review-3-6', title: 'Track review metrics weekly', ongoing: true, completed: false, notes: '' },
                    ]
                },
                {
                    id: 'review-4',
                    title: 'Review Goals',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'review-4-1', title: 'Target: 50+ Google reviews in 90 days', ongoing: true, completed: false, notes: '' },
                        { id: 'review-4-2', title: 'Maintain 4.5+ average rating', ongoing: true, completed: false, notes: '' },
                        { id: 'review-4-3', title: 'Get 20+ Yelp reviews', ongoing: true, completed: false, notes: '' },
                        { id: 'review-4-4', title: 'Get 30+ Facebook reviews', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        },

        analytics: {
            name: 'Analytics & Tracking',
            priority: 'MEDIUM',
            icon: 'TrendingUp',
            color: 'bg-green-500',
            expanded: false,
            tasks: [
                {
                    id: 'analytics-1',
                    title: 'Setup & Configuration',
                    completed: false,
                    subtasks: [
                        { id: 'analytics-1-1', title: 'Set up Google Analytics 4', completed: false, notes: '' },
                        { id: 'analytics-1-2', title: 'Set up Google Search Console', completed: false, notes: '' },
                        { id: 'analytics-1-3', title: 'Set up Google Tag Manager', completed: false, notes: '' },
                        { id: 'analytics-1-4', title: 'Set up Bing Webmaster Tools', completed: false, notes: '' },
                        { id: 'analytics-1-5', title: 'Configure conversion tracking', completed: false, notes: '' },
                        { id: 'analytics-1-6', title: 'Set up event tracking (phone clicks, directions, etc.)', completed: false, notes: '' },
                    ]
                },
                {
                    id: 'analytics-2',
                    title: 'Weekly Monitoring',
                    ongoing: true,
                    frequency: 'Weekly',
                    completed: false,
                    subtasks: [
                        { id: 'analytics-2-1', title: 'Check keyword rankings', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-2-2', title: 'Review organic traffic trends', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-2-3', title: 'Monitor bounce rate', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-2-4', title: 'Track conversion rate', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-2-5', title: 'Review top landing pages', ongoing: true, completed: false, notes: '' },
                    ]
                },
                {
                    id: 'analytics-3',
                    title: 'Monthly Reporting',
                    ongoing: true,
                    frequency: 'Monthly',
                    completed: false,
                    subtasks: [
                        { id: 'analytics-3-1', title: 'Create monthly SEO report', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-3-2', title: 'Track local pack rankings', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-3-3', title: 'Review competitor performance', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-3-4', title: 'Analyze seasonal trends', ongoing: true, completed: false, notes: '' },
                        { id: 'analytics-3-5', title: 'Adjust strategy based on data', ongoing: true, completed: false, notes: '' },
                    ]
                }
            ]
        }
    };

    const [tasks, setTasks] = useState<any>(INITIAL_TASKS);

    const [filter, setFilter] = useState('all'); // all, completed, pending, ongoing
    const [searchTerm, setSearchTerm] = useState('');

    // Load tasks from localStorage on mount
    // Load tasks from localStorage on mount and merge with proper structure
    useEffect(() => {
        const savedTasks = localStorage.getItem('seoTasks');
        if (savedTasks) {
            try {
                const parsed = JSON.parse(savedTasks);
                // Merge saved progress with INITIAL_TASKS to preserve structure (icons, etc.)
                const mergedTasks: any = { ...INITIAL_TASKS };

                Object.keys(mergedTasks).forEach(key => {
                    if (parsed[key]) {
                        // Restore category state
                        mergedTasks[key].expanded = parsed[key].expanded ?? mergedTasks[key].expanded;

                        // Merge tasks
                        if (Array.isArray(parsed[key].tasks)) {
                            mergedTasks[key].tasks = mergedTasks[key].tasks.map((task: any) => {
                                const savedTask = parsed[key].tasks.find((t: any) => t.id === task.id);
                                if (savedTask) {
                                    return {
                                        ...task,
                                        completed: savedTask.completed ?? task.completed,
                                        ongoing: savedTask.ongoing ?? task.ongoing,
                                        subtasks: task.subtasks.map((st: any) => {
                                            const savedSub = savedTask.subtasks?.find((s: any) => s.id === st.id);
                                            if (savedSub) {
                                                return {
                                                    ...st,
                                                    completed: savedSub.completed ?? st.completed,
                                                    notes: savedSub.notes ?? st.notes
                                                };
                                            }
                                            return st;
                                        })
                                    };
                                }
                                return task;
                            });
                        }
                    }
                });

                setTasks(mergedTasks);
            } catch (error) {
                console.error('Failed to parse saved SEO tasks:', error);
                // Fallback to initial state if parse fails
                setTasks(INITIAL_TASKS);
            }
        }
    }, []);

    // Save to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('seoTasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleTaskExpansion = (categoryKey: string) => {
        setTasks((prev: any) => ({
            ...prev,
            [categoryKey]: {
                ...prev[categoryKey],
                expanded: !prev[categoryKey].expanded
            }
        }));
    };

    const toggleSubtask = (categoryKey: string, taskId: string, subtaskId: string) => {
        setTasks((prev: any) => {
            const category = { ...prev[categoryKey] };
            // Create a deep copy of tasks array to avoid mutation
            category.tasks = [...category.tasks];

            const taskIndex = category.tasks.findIndex((t: any) => t.id === taskId);
            const task = { ...category.tasks[taskIndex] };
            // Create a deep copy of subtasks array to avoid mutation
            task.subtasks = [...task.subtasks];

            const subtaskIndex = task.subtasks.findIndex((st: any) => st.id === subtaskId);

            task.subtasks[subtaskIndex] = {
                ...task.subtasks[subtaskIndex],
                completed: !task.subtasks[subtaskIndex].completed
            };

            // Update task completion based on subtasks
            task.completed = task.subtasks.every((st: any) => st.completed);

            category.tasks[taskIndex] = task;

            return {
                ...prev,
                [categoryKey]: category
            };
        });
    };

    const updateSubtaskNotes = (categoryKey: string, taskId: string, subtaskId: string, notes: string) => {
        setTasks((prev: any) => {
            const category = { ...prev[categoryKey] };
            // Create a deep copy of tasks array to avoid mutation
            category.tasks = [...category.tasks];

            const taskIndex = category.tasks.findIndex((t: any) => t.id === taskId);
            const task = { ...category.tasks[taskIndex] };
            // Create a deep copy of subtasks array to avoid mutation
            task.subtasks = [...task.subtasks];

            const subtaskIndex = task.subtasks.findIndex((st: any) => st.id === subtaskId);

            task.subtasks[subtaskIndex] = {
                ...task.subtasks[subtaskIndex],
                notes
            };

            category.tasks[taskIndex] = task;

            return {
                ...prev,
                [categoryKey]: category
            };
        });
    };

    const calculateProgress = (category: any) => {
        const allSubtasks = category.tasks.flatMap((t: any) => t.subtasks);
        const completed = allSubtasks.filter((st: any) => st.completed).length;
        return Math.round((completed / allSubtasks.length) * 100);
    };

    const getOverallProgress = () => {
        const categories: any[] = Object.values(tasks);
        const totalSubtasks = categories.reduce((acc, cat) =>
            acc + cat.tasks.flatMap((t: any) => t.subtasks).length, 0
        );
        const completedSubtasks = categories.reduce((acc, cat) =>
            acc + cat.tasks.flatMap((t: any) => t.subtasks).filter((st: any) => st.completed).length, 0
        );
        return Math.round((completedSubtasks / totalSubtasks) * 100);
    };

    return (
        <div className="min-h-screen bg-transparent text-white p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-gray-400">Charcoal N Chill - Local SEO Optimization Journey</p>
                </div>

                {/* Overall Progress */}
                <div className="bg-gray-800/50 rounded-lg p-6 mb-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-xl font-semibold">Overall Progress</h2>
                            <p className="text-sm text-gray-400">Track your SEO journey to success</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-orange-400">{getOverallProgress()}%</div>
                            <p className="text-sm text-gray-400">Complete</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-4">
                        <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${getOverallProgress()}%` }}
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex gap-2">
                            {['all', 'pending', 'completed', 'ongoing'].map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-2 rounded-lg transition-colors capitalize ${filter === f
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                                        }`}
                                >
                                    {f === 'all' ? 'All Tasks' : f}
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1 min-w-[200px] px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>

                {/* Task Categories */}
                <div className="space-y-4">
                    {Object.entries(tasks).map(([key, category]: [string, any]) => {
                        const progress = calculateProgress(category);
                        const Icon = ICON_MAP[category.icon] || Circle;

                        return (
                            <div key={key} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                                {/* Category Header */}
                                <div
                                    className="p-6 cursor-pointer hover:bg-gray-750 transition-colors"
                                    onClick={() => toggleTaskExpansion(key)}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`${category.color} p-2 rounded-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold">{category.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${category.priority === 'CRITICAL' ? 'bg-red-500/20 text-red-400' :
                                                        category.priority === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                                                            'bg-blue-500/20 text-blue-400'
                                                        }`}>
                                                        {category.priority}
                                                    </span>
                                                    <span className="text-sm text-gray-400">
                                                        {category.tasks.flatMap((t: any) => t.subtasks).filter((st: any) => st.completed).length} / {category.tasks.flatMap((t: any) => t.subtasks).length} tasks
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-orange-400">{progress}%</div>
                                            </div>
                                            {category.expanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                        </div>
                                    </div>

                                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                                        <div
                                            className={`${category.color} h-2 rounded-full transition-all duration-500`}
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Tasks */}
                                {category.expanded && (
                                    <div className="p-6 pt-0 space-y-6">
                                        {category.tasks.map((task: any) => (
                                            <div key={task.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="font-semibold text-lg">{task.title}</h4>
                                                    {task.ongoing && (
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4 text-blue-400" />
                                                            <span className="text-xs text-blue-400 font-semibold">
                                                                {task.frequency}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="space-y-2">
                                                    {task.subtasks.map((subtask: any) => (
                                                        <div key={subtask.id} className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
                                                            <div className="flex items-start gap-3">
                                                                <button
                                                                    onClick={() => toggleSubtask(key, task.id, subtask.id)}
                                                                    className="mt-0.5 flex-shrink-0"
                                                                >
                                                                    {subtask.completed ? (
                                                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                                    ) : (
                                                                        <Circle className="w-5 h-5 text-gray-500" />
                                                                    )}
                                                                </button>
                                                                <div className="flex-1">
                                                                    <div className="flex items-center justify-between">
                                                                        <p className={`text-sm ${subtask.completed ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                                                                            {subtask.title}
                                                                        </p>
                                                                        {subtask.ongoing && (
                                                                            <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 ml-2">
                                                                                Ongoing
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    {subtask.url && (
                                                                        <a
                                                                            href={subtask.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="text-xs text-orange-400 hover:text-orange-300 mt-1 inline-block"
                                                                        >
                                                                            Visit Platform →
                                                                        </a>
                                                                    )}
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Add notes..."
                                                                        value={subtask.notes}
                                                                        onChange={(e) => updateSubtaskNotes(key, task.id, subtask.id, e.target.value)}
                                                                        className="w-full mt-2 px-3 py-1.5 bg-gray-900/50 border border-gray-600 rounded text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* NAP Reference Card */}
                <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-semibold text-lg mb-2">NAP Consistency Reference</h3>
                            <p className="text-sm text-gray-300 mb-3">
                                Use this EXACT format everywhere for consistent citations:
                            </p>
                            <div className="bg-gray-900/50 rounded p-4 font-mono text-sm">
                                <p>Charcoal N Chill</p>
                                <p>11950 Jones Bridge Rd Ste 103</p>
                                <p>Alpharetta, GA 30005</p>
                                <p>(470) 546-4866</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOTaskTracker;
