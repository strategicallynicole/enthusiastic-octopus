import React from "react";
function Card() {
    return (
        <div className="flex flex-wrap items-center justify-between w-full sm:flex-no-wrap">
            <div className="w-full h-64 bg-white rounded-t shadow sm:w-1/3 sm:rounded-l sm:rounded-t-none dark:bg-gray-800" />
            <div className="w-full h-64 bg-white shadow sm:w-1/3 dark:bg-gray-800" />
            <div className="w-full h-64 bg-white rounded-b shadow sm:w-1/3 sm:rounded-b-none dark:bg-gray-800" />
        </div>
    );
}
export default Card;
