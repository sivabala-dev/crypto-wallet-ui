function Portfolio(){
    return(
        <div className=" bg-gray-800 p-6 rounded-xl mt-6  border-gray-700"> 
                <h2 className="text-lg font-bold mb-4 ">My Portfolio</h2>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="flex justify-between items-center bg-gray-700 rounded-lg p-4 mb-3 hover:bg-gray-600 transition">
                     
                            
                        <div>
                            <p className="font-semibold ">Bitcoin</p>
                            <p className="text-sm text-gray-400">BTC</p>
                        </div>
                        
                             <p className="text-green-400">+$120</p>

                    </div>
                    <div className="flex justify-between items-center bg-gray-700 rounded-lg p-4 mb-3 hover:bg-gray-600 transition">
                        <div>
                            <p className="font-semibold">Ethereum</p>
                            <p className="text-sm text-gray-400">ETH</p>
                        </div>
                             <p className="text-red-400">-$80</p>
                    </div>
                    <div className="flex justify-between items-center bg-gray-700 rounded-lg p-4 mb-3 hover:bg-gray-600 transition">
                        <div>
                            <p className="font-semibold">Solana</p>
                            <p className="text-sm text-gray-400">SOL</p>
                        </div>
                             <p className="text-green-400">+$60</p>
                    </div>

                </div>

           </div>
    );

}
export default Portfolio;