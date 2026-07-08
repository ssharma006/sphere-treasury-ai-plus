import { useState } from "react";
export default function TreasuryDashboard() {
const [budgets, setBudgets] = useState([
  {
    name: "Marketing",
    amount: 100,
  },
]);
    return (
    <div
      style={{
        marginTop: "30px",
        padding: "20px",
        border: "1px solid #444",
        borderRadius: "10px",
      }}
    >
      <h2>💰 Treasury Dashboard</h2>

      <p>
        <strong>Treasury Balance:</strong> 0 TEST
      </p>

      <p>
        <strong>Total Budgets:</strong> {budgets.length}
      </p>

      <p>
        <strong>Total Transactions:</strong> 0
      </p>

      <p>
        <strong>AI Status:</strong> Waiting for analysis...
      </p>
      <h3>Current Budgets</h3>

{budgets.map((budget, index) => (
  <div
    key={index}
    style={{
      border: "1px solid #666",
      borderRadius: "8px",
      padding: "10px",
      marginTop: "10px",
    }}
  >
    <strong>{budget.name}</strong>

    <p>{budget.amount} TEST</p>
  </div>
))}
    <button
    style={{
    marginTop: "15px",
    padding: "10px 20px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  ➕ Add Budget
</button>
    </div>
  );
}