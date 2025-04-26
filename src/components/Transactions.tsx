const transactions = [
  { id: 1, title: "Hamleys", date: "20 May 2020", amount: "+ S$150", type: "Refund" },
  { id: 2, title: "Hamleys", date: "20 May 2020", amount: "- S$150", type: "Charge" },
  { id: 3, title: "Hamleys", date: "20 May 2020", amount: "- S$150", type: "Charge" },
  { id: 4, title: "Hamleys", date: "20 May 2020", amount: "- S$150", type: "Charge" },
];

const Transactions = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
      {transactions.map((tx) => (
        <div key={tx.id} className="flex justify-between items-center border-b pb-2">
          <div>
            <p className="font-semibold">{tx.title}</p>
            <p className="text-sm text-gray-500">{tx.date}</p>
          </div>
          <span className={tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>{tx.amount}</span>
        </div>
      ))}
      <div className="text-green-500 text-center mt-4 cursor-pointer">
        View all card transactions
      </div>
    </div>
  );
};

export default Transactions;