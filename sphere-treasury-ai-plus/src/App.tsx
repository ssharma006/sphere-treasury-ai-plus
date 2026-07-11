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
      <h1
  style={{
    color: "#14F195",
    fontSize: "38px",
    fontWeight: "700",
    marginBottom: "20px",
    textAlign: "center",
  }}
>
  🚀 Sphere Treasury AI+
</h1>
<p>
        Autonomous treasury management powered by the Unicity Sphere SDK.
      </p>

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
      color: "#14F195",
      marginTop: 0,
      marginBottom: "15px",
      fontSize: "28px",
    }}
  >
    ✅ Project Progress
  </h2>

  <ul
    style={{
      margin: 0,
      paddingLeft: "22px",
      lineHeight: "2",
      color: "#ffffff",
      fontSize: "17px",
    }}
  >
    <li>✅ React + Vite</li>
    <li>✅ Sphere SDK Installed</li>
    <li>✅ Wallet Connected</li>
    <li>✅ Treasury Dashboard</li>
    <li>✅ Budget Management</li>
    <li>🔄 AI Assistant</li>
  </ul>
</div>
      
      <WalletConnect />

      <TreasuryDashboard />
    </div>
  );
}

export default App;