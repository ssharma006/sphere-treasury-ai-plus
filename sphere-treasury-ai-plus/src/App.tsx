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
      <h1>🚀 Sphere Treasury AI+</h1>

      <p>
        Autonomous treasury management powered by the Unicity Sphere SDK.
      </p>

      <hr />

      <h2>✅ Project Progress</h2>

      <ul>
        <li>✅ React + Vite</li>
        <li>✅ Sphere SDK Installed</li>
        <li>✅ Wallet Connected</li>
        <li>🔄 Treasury Dashboard</li>
        <li>🔄 Budget Management</li>
        <li>🔄 AI Assistant</li>
      </ul>

      <WalletConnect />

      <TreasuryDashboard />
    </div>
  );
}

export default App;