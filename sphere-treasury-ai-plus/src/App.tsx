import TreasuryDashboard from "./components/TreasuryDashboard";
import WalletConnect from "./components/WalletConnect";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
      }}
    >
     <div
  style={{
    textAlign: "center",
    padding: "30px",
    marginBottom: "30px",
    borderRadius: "16px",
    background:
      "linear-gradient(135deg,#0f766e,#14F195)",
    color: "white",
    boxShadow: "0 8px 25px rgba(20,241,149,0.25)",
  }}
>
  <h1
    style={{
      fontSize: "46px",
      margin: 0,
      fontWeight: "bold",
    }}
  >
    💰 Sphere Treasury AI+
  </h1>

  <p
    style={{
      marginTop: "15px",
      fontSize: "18px",
      opacity: 0.95,
    }}
  >
    AI-Powered Treasury Management built with the
    Unicity Sphere SDK
  </p>
</div>
      <hr />
          <div
  style={{
    background: "#127c73",
    border: "1px solid #d0f116",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
    marginBottom: "25px",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(20,184,166,0.25)",
  }}
>
 <h2
  style={{
    marginBottom: "20px",
    color: "#14F195",
  }}
>
  ✅ Project Progress
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "15px",
    marginBottom: "30px",
  }}
>
  {[
    "React + Vite",
    "Sphere SDK",
    "Wallet Connected",
    "Treasury Dashboard",
    "Budget Management",
    "AI Assistant",
  ].map((item) => (
    <div
      key={item}
      style={{
        background: "#1e293b",
        padding: "18px",
        borderRadius: "12px",
        border: "1px solid #14F195",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(20,241,149,0.15)",
      }}
    >
      <div style={{ fontSize: "28px" }}>✅</div>

      <div
        style={{
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        {item}
      </div>
    </div>
  ))}
</div>
</div>
      
      <WalletConnect />

      <TreasuryDashboard />
      <hr
  style={{
    marginTop: "50px",
    borderColor: "#14F195",
    opacity: 0.2,
  }}
/>

<footer
  style={{
    textAlign: "center",
    marginTop: "25px",
    paddingBottom: "20px",
    color: "#94a3b8",
    fontSize: "15px",
  }}
>
  <p>🚀 Sphere Treasury AI+ • Powered by Unicity Sphere SDK</p>

  <p>Built with React • TypeScript • Vite • Recharts</p>
</footer>
    </div>
  );
}

export default App;