import { useEffect, useState } from "react";
import { getGreeting, testDirectBackend } from "../../services/api";

export default function Greeting() {
  const [text, setText] = useState("Laddar…");
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    console.log("API URL:", import.meta.env.VITE_API_URL ?? "http://localhost:8080");
    getGreeting()
      .then(d => setText(d.text))
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
        setText("Kunde inte hämta.");
      });
  }, []);
  
  const testDirect = async () => {
    try {
      const result = await testDirectBackend();
      setText(`Direct: ${result.text}`);
      setError(null);
    } catch (err: any) {
      setError(`Direct test failed: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{text}</h2>
      {error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <p>Error: {error}</p>
          <p>Make sure your backend server is running on http://localhost:8080</p>
        </div>
      )}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={testDirect} style={{ padding: '0.5rem 1rem', marginRight: '1rem' }}>
          Test Direct Backend
        </button>
        <button onClick={() => window.location.reload()} style={{ padding: '0.5rem 1rem' }}>
          Retry Proxy
        </button>
      </div>
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Current URL: {window.location.href}</p>
        <p>API URL: {import.meta.env.VITE_API_URL ?? "Using proxy"}</p>
      </div>
    </div>
  );
}