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
