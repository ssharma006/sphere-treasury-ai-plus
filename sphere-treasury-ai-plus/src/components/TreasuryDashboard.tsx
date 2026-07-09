import { useState } from "react";

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
  const [search, setSearch] = useState("");
  const [sortHighToLow, setSortHighToLow] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingBudget, setEditingBudget] = useState({
  name: "",
  amount: 0,
});
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
      <div
      style={{
       background: "#1e293b",
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

          setBudgetName("");
          setBudgetAmount(0);
        }}
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