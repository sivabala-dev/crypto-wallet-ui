import Portfolio from "../components/Portfolio";
import Sidebar from "../components/Sidebar";
import TopCard from "../components/TopCard";
import Transaction from "../components/Transaction";
function Dashboard(){


    return(
        <div className="flex min-h-screen bg-gray-900 text-white">
            <Sidebar/>

            <div className="flex-1 p-6">
                <TopCard/>
                 
                <Portfolio/>
           
                <Transaction/>
            </div>
            <div className="w-64 bg-gray-800 flex items-center justify-center">
                
            </div>

        </div>
    );

}
export default Dashboard;