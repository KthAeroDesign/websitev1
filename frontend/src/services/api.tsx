// Use relative URL to leverage Vite's proxy in development
const API_URL = import.meta.env.VITE_API_URL ?? "";

// Debug function to test direct backend connection (bypassing proxy)
export async function testDirectBackend() {
  try {
    const res = await fetch('http://localhost:8080/api/greeting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Direct backend test - Status:', res.status);
    const data = await res.json();
    console.log('Direct backend test - Data:', data);
    return data;
  } catch (error) {
    console.error('Direct backend test failed:', error);
    throw error;
  }
}

export async function getGreeting() {
  console.log(`Fetching from: ${API_URL}/api/greeting`);
  try {
    const res = await fetch(`${API_URL}/api/greeting`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.log('Error response:', errorText);
      throw new Error(`API error: ${res.status} - ${errorText}`);
    }
    
    const data = await res.json();
    console.log('Response data:', data);
    return data as { text: string };
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}