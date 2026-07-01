const BASE_URL = "http://localhost:8080"; // todo: replace

async function get<T>(path: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
        throw new Error("HTTP Error: " + response.status);
    }
    return response.json();
}

const api = {get};
export default api;