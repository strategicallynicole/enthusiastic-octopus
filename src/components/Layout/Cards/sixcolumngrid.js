import React from "react";
function Cards() {
    return (
        <div className="flex flex-col items-start justify-between w-full sm:flex-row sm:items-center">
            {/* Code block starts */}
            <div className="w-full mb-8 mr-0 bg-white rounded shadow sm:w-1/2 sm:mb-0 sm:mr-8 dark:bg-gray-800">
                <div className="w-full h-64 border-b border-gray-400 rounded-t dark:border-gray-600" />
                <div className="w-full h-24 bg-gray-100 rounded-b dark:bg-gray-700" />
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="w-full bg-white rounded shadow sm:w-1/2 dark:bg-gray-800">
                <div className="w-full h-24 bg-gray-100 rounded-t dark:bg-gray-700" />
                <div className="w-full h-64 border-t border-gray-400 rounded-b dark:border-gray-600" />
            </div>
            {/* Code block ends */}
        </div>
    );
}
export default Cards;
