import { useState } from "react";
import { initializeSphere } from "../services/sphere";

export default function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  async function connectWallet() {
    const result = await initializeSphere();

    if (result) {
      setConnected(true);

      setAddress(
        (result.sphere as any)._identity.directAddress
      );
    }
  }

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #444",
        borderRadius: "10px",
      }}
    >
      <h2>Sphere Wallet</h2>

      <p>
        Wallet Status: {connected ? "✅ Connected" : "❌ Not Connected"}
      </p>

      {connected && (
        <>
          <p>
            <strong>Wallet Address:</strong>
          </p>

          <p
            style={{
              wordBreak: "break-all",
              background: "#222",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            {address}
          </p>
        </>
      )}

      <button
        onClick={connectWallet}
        style={{
          padding: "12px 20px",
          background: "#ff8a00",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Connect Wallet
      </button>
    </div>
  );
}