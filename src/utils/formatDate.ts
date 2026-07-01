
export default function formatDate(dateISOString: string): string {
    const date: string = dateISOString.split("T")[0];
    const today: string = new Date().toISOString().split("T")[0];
    const tomorrow: string = new Date((new Date().getTime()) + 24 * 60 * 60 * 1000).toISOString().split("T")[0];
    if (date === today) {
        return "Today";
    } else if (date === tomorrow) {
        return "Tomorrow";
    } else {
        return new Date(dateISOString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
        });
    }

}