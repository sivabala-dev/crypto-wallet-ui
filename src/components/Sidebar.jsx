import { Home, Settings, Wallet,User,CircleDollarSign } from "lucide-react";

function Sidebar() {
    return(
        <div className="w-20 bg-gray-800 flex flex-col items-center py-6 gap-10">
                <div className="bg-blue-500 p-3 rounded-full text-white font-bold hover:bg-blue-900">
                    S
                </div>
                <Home className="cursor-pointer hover:text-blue-400"/>
                <Wallet className="cursor-pointer hover:text-blue-400"/>
                <User className="cursor-pointer hover:text-blue-400"/>
                <CircleDollarSign className="cursor-pointer hover:text-blue-400"/>
                <Settings className="cursor-pointer hover:text-blue-400"/>

            </div>
    );
};
export default Sidebar;