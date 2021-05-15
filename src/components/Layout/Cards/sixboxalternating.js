import React from "react";
function Cards() {
    return (
        <div className="flex flex-wrap items-center justify-between w-full lg:flex-no-wrap">
            {/* Code block starts */}
            <div className="flex flex-col items-start w-full mb-8 bg-white rounded shadow lg:flex-row lg:items-center dark:bg-gray-800">
                <div className="w-full h-64 bg-gray-100 border-b rounded-l lg:w-1/2 dark:border-gray-800 lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l dark:bg-gray-700" />
                <div className="w-full h-64 lg:w-1/2" />
            </div>
            {/* Code block starts */}
            {/* Code block ends */}
            <div className="flex flex-col items-start w-full bg-white rounded shadow lg:flex-row lg:items-center dark:bg-gray-800">
                <div className="w-full h-64 lg:w-1/2" />
                <div className="w-full h-64 bg-gray-100 border-t rounded-r lg:w-1/2 dark:border-gray-800 lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l dark:bg-gray-700" />
            </div>
            {/* Code block ends */}
        </div>
    );
}
export default Cards;
