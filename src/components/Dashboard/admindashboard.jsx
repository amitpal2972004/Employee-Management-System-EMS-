import React from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Alltask from "../others/Alltask";

const admindashboard = (props) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="h-screen w-full p-6 lg:p-10 overflow-y-auto">
                <Header changeUser={props.changeUser} />
                <Createtask />
                <Alltask />
            </div>
        </div>
    );
};

export default admindashboard;