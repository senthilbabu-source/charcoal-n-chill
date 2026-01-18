/**
 * Calculator for "Next Occurring Day" to enable Dynamic Event Schema.
 * Useful for ensuring Google always sees a future date for recurring events,
 * preventing them from being marked as "Expired".
 */

export function getNextDayOfWeek(dayName: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const targetIndex = days.indexOf(dayName);

    if (targetIndex === -1) throw new Error("Invalid day name");

    const today = new Date();
    const currentDayIndex = today.getDay();

    let daysUntilTarget = targetIndex - currentDayIndex;

    // If the target day is today or already passed this week, move to next week
    // exception: if today IS the day, we might want to show today's date if it's early, 
    // but for SEO it's safer to show "Next Week" if near end of day. 
    // For simplicity, if today is Tuesday, we return TODAY (0 days away) so the event is "Happening Today!"
    if (daysUntilTarget < 0) {
        daysUntilTarget += 7;
    }

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysUntilTarget);

    // Format as ISO 8601 (YYYY-MM-DD)
    return nextDate.toISOString().split('T')[0];
}



export function getNextTuesday() {
    return getNextDayOfWeek('Tuesday');
}

export function getNextFriday() {
    return getNextDayOfWeek('Friday');
}


interface EventTemplate {
    name: string;
    day: 'Friday' | 'Saturday';
    description: string;
    image: string;
    performer: string;
    startTime: number; // Hour (24h)
    endTime: number; // Hour (24h), next day if < startTime
}

const eventTemplates: EventTemplate[] = [
    {
        name: 'Belly Dancing Night',
        day: 'Friday',
        description: 'Live belly dancing performance with DJ music.',
        image: 'https://charcoalnchill.com/images/belly-dance-cnc.jpg',
        performer: 'Atlanta Belly Dance',
        startTime: 22, // 10 PM
        endTime: 2 // 2 AM
    },
    {
        name: 'Saturday Night Live Entertainment',
        day: 'Saturday',
        description: 'High-energy DJ sets, live entertainment, and the best hookah in Alpharetta.',
        image: 'https://charcoalnchill.com/images/events-hero.jpg', // Using hero as default for Sat if no specific one
        performer: 'Live DJ',
        startTime: 22,
        endTime: 2
    }
];

/**
 * Generates full Rich Schema objects for the next 8 weeks.
 * Includes all required Google fields: eventStatus, location, offers, etc.
 */
export function generateWeekendEvents(weeksToCheck = 8) {
    const events: any[] = []; // eslint-disable-line @typescript-eslint/no-explicit-any
    const today = new Date();

    for (let i = 0; i < weeksToCheck; i++) {
        eventTemplates.forEach(template => {
            const weekOffset = i * 7;
            const eventDate = new Date(today);
            eventDate.setDate(today.getDate() + weekOffset);

            // Find the correct day of the week
            const targetDay = template.day === 'Friday' ? 5 : 6;
            while (eventDate.getDay() !== targetDay) {
                eventDate.setDate(eventDate.getDate() + 1);
            }

            // Set Start Time
            const startDate = new Date(eventDate);
            startDate.setHours(template.startTime, 0, 0);

            // Set End Time (Handle next day rollover)
            const endDate = new Date(eventDate);
            if (template.endTime < template.startTime) {
                endDate.setDate(endDate.getDate() + 1);
            }
            endDate.setHours(template.endTime, 0, 0);

            events.push({
                "@type": "Event",
                "name": template.name,
                "description": template.description,
                "startDate": startDate.toISOString().split('.')[0],
                "endDate": endDate.toISOString().split('.')[0],
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "image": template.image,
                "location": {
                    "@type": "Place",
                    "name": "Charcoal N Chill",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "11950 Jones Bridge Rd Ste 103",
                        "addressLocality": "Alpharetta",
                        "addressRegion": "GA",
                        "postalCode": "30005",
                        "addressCountry": "US"
                    }
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://charcoalnchill.com/events",
                    "price": "10", // Example cover, default to 0 if needed or make dynamic
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "validFrom": today.toISOString()
                },
                "performer": {
                    "@type": "PerformingGroup",
                    "name": template.performer
                },
                "organizer": {
                    "@type": "Organization",
                    "name": "Charcoal N Chill",
                    "url": "https://charcoalnchill.com"
                }
            });
        });
    }

    return events;
}
