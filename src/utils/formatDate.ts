
export default function formatDate(dateISOString: string, lowercase: boolean = false): string {
    const date: string = dateISOString.split("T")[0];
    const today: string = new Date().toISOString().split("T")[0];
    const tomorrow: string = new Date((new Date().getTime()) + 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    if (date === today) {
        return (lowercase)? "today": "Today";
    } else if (date === tomorrow) {
        return (lowercase)? "tomorrow": "Tomorrow";
    } else {
        // lowercase property does not apply to day-month format
        return new Date(dateISOString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
    }

}