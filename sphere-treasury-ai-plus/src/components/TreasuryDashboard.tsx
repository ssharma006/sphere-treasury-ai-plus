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
  const [budgets, setBudgets] = useState([
    {
      name: "Marketing",
      amount: 100,
    },
  ]);
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);
  const [activities, setActivities] = useState<string[]>([]);
  const [transactions, setTransactions] = useState<
        { action: string; amount: number }[]
        >([]);
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
        marginTop: "30px",
        padding: "20px",
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
   <h2>💰 Treasury Dashboard</h2>

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
      borderRadius: "14px",
    }}
  >
    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
  </button>
  </div>
<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  }}
>
  <h3>🤖 AI Recommendation</h3>

       <p>
       {budgets.reduce((t, b) => t + b.amount, 0) > 1000
       ? "Treasury is growing well. Consider diversifying funds."
       : "Treasury is small. Focus on increasing the budget."}
       </p>
       </div>

       <p>
        <strong>Treasury Balance:</strong>{" "}
        {budgets.reduce((total, budget) => total + budget.amount, 0)} TEST
       </p>

      <p>
        <strong>Total Budgets:</strong> {budgets.length}
      </p>

      <p>
        <strong>Treasury Health:</strong>{" "}
        {budgets.length >= 3 ? "🟢 Healthy" : "🟡 Growing"}
      </p>

      <p>
        <strong>AI Status:</strong>{" "}
       {budgets.reduce((t, b) => t + b.amount, 0) > 1000
       ? "✅ AI Analysis Complete"
       : "⏳ Waiting for more treasury data"}
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
    minWidth: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
    <h4>💰 Total Treasury</h4>
    <p>
      {budgets.reduce((t, b) => t + b.amount, 0)} TEST
    </p>
  </div>
            <div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    borderRadius: "10px",
    minWidth: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
  <h4>🏆 Largest Budget</h4>
  <p>
    {Math.max(...budgets.map((b) => b.amount))} TEST
  </p>
</div>

<div
  style={{
    background: darkMode ? "#1e293b" : "#f3f4f6",
    padding: "15px",
    borderRadius: "10px",
    minWidth: "180px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
  <h4>📉 Smallest Budget</h4>
  <p>
    {Math.min(...budgets.map((b) => b.amount))} TEST
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
  <p>
    {Math.round(
      budgets.reduce((t, b) => t + b.amount, 0) / budgets.length
    )} TEST
  </p>
</div>
  <div
    style={{
      background: darkMode ? "#1e293b" : "#f3f4f6",
      padding: "15px",
      borderRadius: "10px",
      minWidth: "180px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      transition: "0.3s",
      borderRadius: "14px",
    }}
  >
    <h4>📦 Total Budgets</h4>
    <p>{budgets.length}</p>
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
           /><button
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
           <h3>Current Budgets</h3>
           <div
  style={{
    width: "100%",
    height: 300,
    background: darkMode ? "#1e293b" : "#f3f4f6",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
  }}
>
  <h3>📊 Budget Overview</h3>

  <ResponsiveContainer width="100%" height="85%">
    <BarChart data={budgets}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#22c55e" />
    </BarChart>
  </ResponsiveContainer>
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
    <h3>✏ Edit Budget</h3>

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
  },
  ...transactions,
]); 
         setEditingIndex(null);
  }}
  style={{
    marginLeft: "10px",
    padding: "8px 15px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "0.3s",
    borderRadius: "14px",
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
      <h3 style={{ marginTop: "25px" }}>📜 Recent Activity</h3>

      {activities.length === 0 ? (
        <p>No activity yet.</p>
      ) : (
        activities.map((activity, index) => (
          <p key={index}>• {activity}</p>
        ))
      )}
        <h3 style={{ marginTop: "25px" }}>💳 Transaction History</h3>

{transactions.length === 0 ? (
  <p>No transactions yet.</p>
) : (
  transactions.map((tx, index) => (
    <div
      key={index}
      style={{
        border: "1px solid #555",
        padding: "8px",
        borderRadius: "6px",
        marginTop: "8px",
      }}
    >
      <strong>{tx.action}</strong>

      <p>{tx.amount} TEST</p>
    </div>
  ))
)}
  <div
  style={{
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  }}
>
  <button
    onClick={() => {
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

      setTransactions([
        {
          action: `Added ${budgetName}`,
          amount: budgetAmount,
        },
        ...transactions,
      ]);

      setBudgetName("");
      setBudgetAmount(0);
    }}
    style={{
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
    <button
  onClick={exportCSV}
  style={{
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
  }}
>
  📄 Export Treasury CSV
</button>
 
</div>
</div>
  );
}