
export default function formatDate(dateISOString: string, lowercase: boolean = false, local: boolean = true): string {
    const date: string = getDate(new Date(dateISOString), local);
    const today: string = getDate(new Date(), local);
    const tomorrow: string = getDate(new Date((new Date().getTime()) + 24 * 60 * 60 * 1000));
    if (date === today) {
        return (lowercase)? "today": "Today";
    } else if (date === tomorrow) {
        return (lowercase)? "tomorrow": "Tomorrow";
    } else {
        // lowercase property does not apply to day-month format
        return new Date(dateISOString).toLocaleDateString('en-US', (local)? {
            month: 'long',
            day: 'numeric',
        }: {
            month: 'long',
            day: 'numeric',
            timeZone: 'Europe/London',
        });
    }

}

function getDate(date: Date, local: boolean = true) {
    const formatLocal = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    const formatUK = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'Europe/London',
    }
    return date.toLocaleDateString('de-DE', ((local)? formatLocal: formatUK) as Intl.DateTimeFormatOptions);
}