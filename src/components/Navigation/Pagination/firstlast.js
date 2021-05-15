import React from "react";
const Pagination = () => {
    return (
        <div>
            <div className="container py-8 mx-auto max-w-8xl">
                <ul className="flex items-center justify-center">
                    <li>
                        <span className="flex p-1 mr-3 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded cursor-pointer hover:text-indigo-700 focus:outline-none">First</span>
                    </li>
                    <li>
                        <span className="flex mx-4 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:text-indigo-700 focus:outline-none">1</span>
                    </li>
                    <li>
                        <span className="flex mx-4 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:text-indigo-700 focus:outline-none">2</span>
                    </li>
                    <li>
                        <span className="flex p-1 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded cursor-pointer hover:text-indigo-700 focus:outline-none">...</span>
                    </li>
                    <li>
                        <span className="flex mx-4 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:text-indigo-700 focus:outline-none">6</span>
                    </li>
                    <li>
                        <span className="flex mx-4 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:text-indigo-700 focus:outline-none">7</span>
                    </li>
                    <li>
                        <span className="flex p-1 ml-3 text-base font-bold leading-tight text-gray-600 transition duration-150 ease-in-out rounded cursor-pointer hover:text-indigo-700 focus:outline-none">Last</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Pagination;
