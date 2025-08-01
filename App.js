import React, { useState } from "react";
import { BACKEND_URL } from "../config";

function App() {
  const [siteName, setSiteName] = useState("");

  const generateReport = async () => {
    const res = await fetch(`${BACKEND_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ site_name: siteName }),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit_report.pptx";
    a.click();
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Générateur de rapport d'audit</h1>
      <input
        type="text"
        placeholder="Nom du site"
        value={siteName}
        onChange={(e) => setSiteName(e.target.value)}
      />
      <button onClick={generateReport} style={{ marginLeft: "1rem" }}>
        Générer le rapport
      </button>
    </div>
  );
}

export default App;