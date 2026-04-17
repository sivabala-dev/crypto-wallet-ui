function TopCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="bg-blue-500 p-4 rounded-xl  hover:scale-150 transition">
                        <h2 className="text-sm font-bold">Total Balance</h2>
                        <p className="text-2xl mt-2 font-bold">$12,345.67</p>
                    </div>
                    <div className="bg-green-500 p-4 rounded-xl hover:scale-150 transition">
                        <h2 className="text-sm font-bold ">Balance</h2>
                        <p className="text-2xl mt-2 font-bold">$5,765.43</p>

                    </div>
                    <div className="bg-red-500 p-4 rounded-xl hover:scale-150 transition">
                        <h2 className="text-sm font-bold">Income</h2>
                        <p className="text-2xl mt-2 font-bold">$2,345.67</p>
                    </div>
                    <div className="bg-yellow-500 p-4 rounded-xl hover:scale-150 transition">
                        <h2 className="text-sm font-bold">Expense</h2>
                        <p className="text-2xl mt-2 font-bold">$1,765.43</p>
                    </div>


                </div>
                 
    );
}
export default TopCard;