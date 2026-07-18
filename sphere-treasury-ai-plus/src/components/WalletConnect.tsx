import { useState } from "react";
import { initializeSphere } from "../services/sphere";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [network, setNetwork] = useState("");
  const [initializedAt, setInitializedAt] = useState("");
  async function connectWallet() {
    const result = await initializeSphere();

    if (result?.info) {
      setConnected(result.info.initialized);
      setAddress(result.info.walletAddress);
      setNetwork(result.info.network);
      setInitializedAt(result.info.initializedAt);
}
  }

  return (
    <div
      style={{
        marginTop: "30px",
        marginBottom: "25px",
        padding: "20px",
        background: "#0f766e",
        border: "1px solid #14b8a6",
        borderRadius: "12px",
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
        🔗 Sphere Wallet
      </h2>
      <p>
  <strong>Wallet Status:</strong>{" "}
  {connected ? "✅ Connected" : "❌ Not Connected"}
</p>

<p>
  <strong>Network:</strong> {network}
</p>

<p>
  <strong>Initialized:</strong> {initializedAt}
</p>
      {connected && (
        <>
          <p>
            <strong>Sphere Wallet Address:</strong>
          </p>

          <p
            style={{
              wordBreak: "break-all",
              background: "#134e4a",
              color: "#ffffff",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #14b8a6",
            }}
          >
            {address}
          </p>
        </>
      )}

      {!connected && (
        <button
          onClick={connectWallet}
          style={{
            marginTop: "15px",
            padding: "12px 22px",
            background: "#14F195",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Connect Sphere Wallet
        </button>
      )}
    </div>
  );
}