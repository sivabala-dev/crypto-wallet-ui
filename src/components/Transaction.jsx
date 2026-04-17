function Transaction() {
    const transactions = [
  { id: 1, name: "Bitcoin", amount: "+$120", status: "success" },
  { id: 2, name: "Ethereum", amount: "-$80", status: "loss" },
  { id: 3, name: "Solana", amount: "+$60", status: "success" },
];
        return (
            <div className="bg-gray-800 p-6 rounded-xl mt-6">
  <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>

  {transactions.map((tx) => (
    <div
      key={tx.id}
      className="flex justify-between items-center bg-gray-700 p-4 rounded-lg mb-3 hover:bg-gray-600 transition"
    >
        <div className="flex gap-20">
      <p>{tx.id}</p>
      <p>{tx.name}</p>
      </div>

      <p className={tx.status === "success" ? "text-green-400" : "text-red-400"}>
        {tx.amount + " " + tx.status}
      </p>
    </div>
  ))}
</div>
        );
    
}
export default Transaction;