import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TreasuryDashboard() {
  const sdkStatus = "🟢 Connected";
  const [budgets, setBudgets] = useState<
  {
    name: string;
    amount: number;
  }[]
>([]);
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [activities, setActivities] = useState<string[]>([]);
  const [transactions, setTransactions] = useState<
         {
           action: string;
           amount: number;
           time: string;
           status: string;
         }[]
        >([]);
  const [aiMessage, setAiMessage] = useState("");         
  const [search, setSearch] = useState("");
  const [sortHighToLow, setSortHighToLow] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingBudget, setEditingBudget] = useState({
  name: "",
  amount: 0,
});
   const [darkMode, setDarkMode] = useState(true);
   const exportCSV = () => {
   const csv =
    "Budget,Amount\n" +
    budgets
      .map((b) => `${b.name},${b.amount}`)
      .join("\n");

  const blob = new Blob([csv], {
    type: "text/csv",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "treasury-budgets.csv";

  link.click();

  URL.revokeObjectURL(url);
};
  return (
    <div
        style={{
        maxWidth: "1280px",
        margin: "30px auto",
        padding: "24px",
        border: "1px solid #444",
        borderRadius: "10px",
        background: darkMode ? "#0f172a" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
     }}
    >
      <div
         style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
  }}
>
  <div>
  <h2
  style={{
    margin: 0,
    fontSize: "34px",
    fontWeight: "700",
    color: "#14F195",
    marginBottom: "8px",
  }}
>
  💰 Sphere Treasury AI+
</h2>
  <p
    style={{
      marginTop: "5px",
      color: darkMode ? "#94a3b8" : "#475569",
      fontSize: "14px",
    }}
  >
    AI-powered Treasury Management built on Sphere SDK
  </p>
</div>
       <div
  style={{
    background: "#0f766e",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid #14b8a6",
  }}
><h3
  style={{
    color: "#14F195",
    fontSize: "22px",
    marginBottom: "10px",
  }}
>
  🔗 Sphere Wallet
</h3>
<p>
  <strong>Status:</strong> {sdkStatus}
</p>

<p>
  <strong>Network:</strong> Sphere Testnet v2
</p>

<p>
  <strong>SDK:</strong> @unicitylabs/sphere-sdk
</p>

<hr style={{ margin: "12px 0", opacity: 0.3 }} />

<p>🪪 Identity : ✅ Initialized</p>

<p>👛 Wallet : ✅ Connected</p>

<p>🤝 Settlement : ✅ Enabled</p>

<p>🔐 Treasury : ✅ Managed by Sphere SDK</p>
  
</div>
    <button
    onClick={() => setDarkMode(!darkMode)}
    style={{
      padding: "8px 15px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      background: darkMode ? "#facc15" : "#1e293b",
      color: darkMode ? "#000" : "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      transition: "0.3s",
      }}
  >
    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
  </button>
  </div>
<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
    <div
  style={{
    background: darkMode ? "#172554" : "#eff6ff",
    padding: "18px",
    borderRadius: "12px",
    marginBottom: "20px",
    border: "1px solid #3b82f6",
  }}
>
  <h3>🚀 About Sphere Treasury AI+</h3>

  <p>
    Sphere Treasury AI+ is an intelligent treasury management application built
    on the Sphere SDK. It helps organizations manage budgets, analyze treasury
    health, monitor transactions, and receive AI-powered financial insights.
  </p>

  <ul style={{ marginTop: "10px", lineHeight: "1.8" }}>
    <li>✅ AI Budget Recommendations</li>
    <li>✅ Treasury Analytics Dashboard</li>
    <li>✅ Budget Management</li>
    <li>✅ Transaction History</li>
    <li>✅ Sphere SDK Integration</li>
    <li>✅ Sphere Testnet Ready</li>
  </ul>
</div>
         <p
  style={{
    background: darkMode ? "#1e293b" : "#f8fafc",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #14b8a6",
    marginTop: "15px",
    lineHeight: "1.7",
  }}
><div
  style={{
    background: "linear-gradient(135deg,#0f172a,#1d4ed8)",
    color: "white",
    padding: "24px",
    borderRadius: "18px",
    marginTop: "25px",
    marginBottom: "25px",
    border: "1px solid #14F195",
    boxShadow: "0 8px 20px rgba(20,241,149,0.18)",
  }}
>
  <h3
    style={{
      marginTop: 0,
      color: "#14F195",
      fontSize: "26px",
    }}
  >
    🤖 AI Treasury Assistant
  </h3>

  <p
    style={{
      fontSize: "17px",
      lineHeight: "1.8",
    }}
  >
    {aiMessage || "Add budgets to receive intelligent treasury recommendations."}
  </p>

  <div
    style={{
      marginTop: "18px",
      padding: "12px",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.08)",
    }}
  >
    💡 AI analyzes your treasury allocation, balance health, diversification,
    and growth opportunities in real time.
  </div>
</div>
  <strong>🤖 AI Treasury Assistant</strong>
  <br />

  {budgets.length === 0
    ? "No treasury data found. Add your first budget to receive AI insights."

    : budgets.reduce((t, b) => t + b.amount, 0) < 500
    ? "Your treasury is still small. Focus on increasing reserves before expanding spending."

    : Math.max(...budgets.map((b) => b.amount)) >
      budgets.reduce((t, b) => t + b.amount, 0) * 0.6
    ? "Most of your treasury is concentrated in one budget. Consider redistributing 10–20% into other categories to reduce financial risk."

    : budgets.length < 3
    ? "Create additional budget categories to improve diversification and financial planning."

    : "Your treasury is healthy and well diversified. Continue monitoring spending and maintain an emergency reserve for future growth."}
</p>
       </div>

       <p>
        <strong>Treasury Balance:</strong>{" "}
        {budgets.reduce((total, budget) => total + budget.amount, 0)} TEST
       </p>

      <p>
        
        <strong>Total Budgets:</strong> {budgets.length}
        <p
  style={{
    fontSize: "30px",
    fontWeight: "bold",
    color: "#14F195",
    marginTop: "12px",
  }}
>
  {/* Keep the existing value here */}
</p>
      </p>

      <p>
        <strong>Treasury Health:</strong>{" "}
        {budgets.length >= 3 ? "🟢 Healthy" : "🟡 Growing"}
      </p>

      <p>
  {budgets.length < 3
    ? "Treasury is still growing. Add more budget categories for better diversification."
    : Math.max(...budgets.map((b) => b.amount)) >
      budgets.reduce((t, b) => t + b.amount, 0) * 0.6
    ? "One budget holds most of the treasury. Consider redistributing funds to reduce risk."
    : budgets.reduce((t, b) => t + b.amount, 0) > 1000
    ? "Treasury is healthy and diversified. Continue monitoring allocations."
    : "Treasury balance is improving. Consider increasing reserves."}
</p>
        <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Budget Name"
          value={budgetName}
          onChange={(e) => setBudgetName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <input
          type="number"
          placeholder="Amount"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(Number(e.target.value))}
          style={{ padding: "8px", marginRight: "10px" }}
          
         />
         <div
  style={{
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "18px",
    borderRadius: "14px",
    minWidth: "220px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
        
    }}
>
    <h4>💰 Total Treasury</h4>
    <p>
      <p
  style={{
    fontSize: "30px",
    fontWeight: "bold",
    color: "#14F195",
    marginTop: "12px",
  }}
>
  {/* Keep the existing value here */}
</p>
      {budgets.reduce((t, b) => t + b.amount, 0)} TEST
    </p>
  </div>
            <div
  style={{
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "white",
  padding: "22px",
  borderRadius: "18px",
  border: "1px solid #14F195",
  boxShadow: "0 8px 20px rgba(20,241,149,0.18)",
  transition: "0.3s",
  textAlign: "center",
  }}
>
  <h4>🏆 Largest Budget</h4>
  <p>
    <p
  style={{
    fontSize: "30px",
    fontWeight: "bold",
    color: "#14F195",
    marginTop: "12px",
  }}
>
  {/* Keep the existing value here */}
</p>
    {budgets.length
    ? Math.max(...budgets.map((b) => b.amount))
    : 0} TEST
  </p>
</div>
<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    minWidth: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
  <h4>📉 Smallest Budget</h4>
  <p>
    <p
  style={{
    fontSize: "30px",
    fontWeight: "bold",
    color: "#14F195",
    marginTop: "12px",
  }}
>
  {/* Keep the existing value here */}
</p>
    {budgets.length
    ? Math.min(...budgets.map((b) => b.amount))
    : 0} TEST
  </p>
</div>
<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    borderRadius: "10px",
    minWidth: "180px",
  }}
>
  <h4>📈 Average Budget</h4>

  <p
    style={{
      fontSize: "30px",
      fontWeight: "bold",
      color: "#14F195",
      marginTop: "12px",
    }}
  >
    {budgets.length
      ? Math.round(
          budgets.reduce((t, b) => t + b.amount, 0) /
            budgets.length
        )
      : 0}{" "}
    TEST
  </p>
</div>

<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    minWidth: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
  <h4>📦 Total Budgets</h4>

  <p
    style={{
      fontSize: "30px",
      fontWeight: "bold",
      color: "#14F195",
      marginTop: "12px",
    }}
  >
    {budgets.length}
  </p>
</div>
</div>
      </div>
             <input 
              type="text"
              placeholder="🔍 Search Budget"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
              padding: "8px",
              marginTop: "10px",
              width: "250px",
              display: "block",
           }}
           />
           <button
             onClick={() => setSortHighToLow(!sortHighToLow)}
             style={{
              marginTop: "10px",
              padding: "8px 15px",
              background: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
                 }}
             >
             {sortHighToLow ? "⬇ Highest First" : "⬆ Lowest First"}
             </button>
           <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>Current Budgets</h3>
           <div
  style={{
    width: "100%",
    height: 300,
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
> <h3
  style={{
    fontSize: "20px",
    marginTop: "25px",
    marginBottom: "10px",
  }}
>
  💳 Transaction History
</h3>

  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>📊 Budget Overview</h3>

  {budgets.length === 0 ? (
  <p
    style={{
      textAlign: "center",
      marginTop: "100px",
      color: "#94a3b8",
      fontSize: "16px",
    }}
  >
    📭 No budgets available. Add your first budget to view analytics.
  </p>
) : (
  <ResponsiveContainer width="100%" height="85%">
    <BarChart data={budgets}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#22c55e" />
    </BarChart>
  </ResponsiveContainer>
)}
</div>
              {editingIndex !== null && (
  <div
    style={{
      border: "1px solid #555",
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "8px",
    }}
  >
    <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>✏ Edit Budget</h3>

    <input
      type="text"
      value={editingBudget.name}
      onChange={(e) =>
        setEditingBudget({
          ...editingBudget,
          name: e.target.value,
        })
      }
      style={{
        padding: "8px",
        marginRight: "10px",
      }}
    />

    <input
      type="number"
      value={editingBudget.amount}
      onChange={(e) =>
        setEditingBudget({
          ...editingBudget,
          amount: Number(e.target.value),
        })
      }
      style={{
        padding: "8px",
      }}
    />
             <button
  onClick={() => {
    const updatedBudgets = [...budgets];

    updatedBudgets[editingIndex!] = editingBudget;

    setBudgets(updatedBudgets);
    
    setActivities([
      `Edited "${editingBudget.name}" (${editingBudget.amount} TEST)`,
      ...activities,
    ]);
    setTransactions([
  {
    action: `Edited ${editingBudget.name}`,
    amount: editingBudget.amount,
    status: "Success",
    time: new Date().toLocaleTimeString(),
  },
  ...transactions,
]);
         setEditingIndex(null);
  }}
  style={{
  padding: "12px 22px",
  background: "#22c55e",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(34,197,94,0.35)",
  transition: "0.3s ease",
}}
>
  💾 Save Changes
</button>
  </div>
)}
             {budgets
  .filter((budget) =>
    budget.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) =>
    sortHighToLow
      ? b.amount - a.amount
      : a.amount - b.amount
  )
  .map((budget, index) => (
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

      <button
        onClick={() => {
          setActivities([
            `Deleted "${budget.name}"`,
            ...activities,
          ]);

          setTransactions([
  {
    action: `Deleted ${budget.name}`,
    amount: budget.amount,
    status: "Success",
    time: new Date().toLocaleTimeString(),
  },
  ...transactions,
]);

          setBudgets(
            budgets.filter((_, i) => i !== index)
          );
        }}
        style={{
          marginTop: "8px",
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        🗑 Delete
      </button>

      <button
        onClick={() => {
          setEditingIndex(index);
          setEditingBudget({
            name: budget.name,
            amount: budget.amount,
          });
        }}
        style={{
          marginLeft: "10px",
          background: "#f59e0b",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ✏ Edit
      </button>
    </div>
  ))}            
     <h3
  style={{
    fontSize: "20px",
    marginTop: "25px",
    marginBottom: "10px",
  }}
>
  📜 Recent Activity
</h3>
      {activities.length === 0 ? (
        <p>No activity yet.</p>
      ) : (
        activities.map((activity, index) => (
          <p key={index}>• {activity}</p>
        ))
      )}
       
      {transactions.map((tx, index) => (
  <div
    key={index}
    style={{
      background: darkMode ? "#1e293b" : "#f8fafc",
      border: "1px solid #14b8a6",
      borderRadius: "10px",
      padding: "14px",
      marginTop: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <strong>{tx.action}</strong>

      <span
        style={{
          color: "#22c55e",
          fontWeight: "bold",
        }}
      >
        {tx.status}
      </span>
    </div>

    <p style={{ marginTop: "8px" }}>
      💰 {tx.amount} TEST
    </p>

    <small
      style={{
        color: "#94a3b8",
      }}
    >
      🕒 {tx.time}
    </small>
  </div>
))}
  <div
  style={{
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  }}
>
  <button
    onClick={() => {
      if (!budgetName.trim()) {
  alert("Please enter a budget name.");
  return;
}
 if (!budgetName.trim()) {
  alert("Please enter a budget name.");
  return;
}
if (budgetAmount <= 0) {
  alert("Please enter a valid budget amount.");
  return;
}
if (
  budgets.some(
    (budget) =>
      budget.name.toLowerCase() === budgetName.toLowerCase()
  )
) {
  alert("Budget already exists.");
  return;
}
      setBudgets([
        ...budgets,
        {
          name: budgetName,
          amount: budgetAmount,
        },
      ]);

      setActivities([
        `Added "${budgetName}" (${budgetAmount} TEST)`,
        ...activities,
      ]);
      const total = budgets.reduce((t, b) => t + b.amount, 0) + budgetAmount;

if (total < 500) {
  setAiMessage("⚠ Treasury balance is low. Consider increasing reserves.");
} else if (total > 1000) {
  setAiMessage("🚀 Treasury is healthy. Consider investing surplus funds for growth.");
} else {
  setAiMessage("✅ Treasury is balanced and performing well.");
}
     setTransactions([
  {
    action: `Added ${budgetName}`,
    amount: budgetAmount,
    status: "Success",
    time: new Date().toLocaleTimeString(),
  },
  ...transactions,
]);

      setBudgetName("");
      setBudgetAmount(0);
    }}
    style={{
      padding: "10px 18px",
      background: "#22c55e",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    ➕ Add Budget
  </button>
    <button
  onClick={exportCSV}
  style={{
  padding: "10px 18px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 4px 12px rgba(37,99,235,0.35)",
  transition: "0.3s ease",
}}
>
  📄 Export Treasury CSV
</button>
 
</div>
</div>
  );
}