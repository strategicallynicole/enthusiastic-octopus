import React from "react";
function Card() {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="w-full shadow">
                <div className="w-full h-64 bg-gray-100 border-b border-gray-400 rounded-t dark:bg-gray-800 dark:border-gray-700" />
                <div className="w-full h-24 bg-white rounded-b dark:bg-gray-800" />
            </div>
        </div>
    );
}
export default Card;
