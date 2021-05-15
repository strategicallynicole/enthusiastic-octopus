import React from "react";
function Card() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full h-full bg-white rounded shadow dark:bg-gray-800">
                <div className="flex flex-col items-center w-full lg:flex-row">
                    <div className="w-full h-64 rounded-l lg:w-2/3" />
                    <div className="w-full h-24 bg-gray-100 border-t lg:w-1/3 lg:h-64 lg:border-t-0 lg:border-l dark:border-gray-500 lg:rounded-r dark:bg-gray-700" />
                </div>
                <div className="w-full h-16 bg-gray-200 border-t border-gray-400 rounded-b lg:h-24 dark:bg-gray-800 dark:border-gray-500" />
            </div>
        </div>
    );
}
export default Card;
