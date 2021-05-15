import React from "react";
function Card() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start w-full bg-white rounded shadow lg:flex-row lg:items-center">
                <div className="w-full h-24 bg-gray-100 border-b lg:w-1/3 lg:h-64 dark:border-gray-700 lg:border-b-0 lg:border-r lg:border-l lg:rounded-l dark:bg-gray-700" />
                <div className="w-full h-64 lg:w-2/3 dark:bg-gray-800" />
            </div>
        </div>
    );
}
export default Card;
