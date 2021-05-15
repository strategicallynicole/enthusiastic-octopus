import React from "react";
function Card() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start w-full bg-white rounded shadow lg:flex-row lg:items-center">
                <div className="w-full h-64 lg:w-2/3 dark:bg-gray-800" />
                <div className="w-full h-24 bg-gray-100 border-t lg:w-1/3 dark:border-gray-700 lg:h-64 lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700" />
            </div>
        </div>
    );
}
export default Card;
