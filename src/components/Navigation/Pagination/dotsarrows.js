import React from "react";
const Pagination = () => {
    return (
        <div>
            <div className="container py-8 mx-auto max-w-8xl">
                <ul className="flex items-center justify-center">
                    <li>
                        <span className="flex p-1 text-base font-bold leading-tight text-gray-500 transition duration-150 ease-in-out rounded cursor-pointer hover:text-indigo-700 focus:outline-none">
                            <div className="w-6 h-6 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </div>
                        </span>
                    </li>
                    <li>
                        <span className="flex w-3 h-3 mx-3 transition duration-150 ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-indigo-700 focus:outline-none" />
                    </li>
                    <li>
                        <span className="flex w-3 h-3 mx-3 transition duration-150 ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-indigo-700 focus:outline-none" />
                    </li>
                    <li>
                        <span className="flex w-3 h-3 mx-3 transition duration-150 ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-indigo-700 focus:outline-none" />
                    </li>
                    <li>
                        <span className="flex w-3 h-3 mx-3 transition duration-150 ease-in-out bg-gray-400 rounded-full cursor-pointer hover:bg-indigo-700 focus:outline-none" />
                    </li>
                    <li>
                        <span className="flex p-1 text-base font-bold leading-tight text-gray-500 transition duration-150 ease-in-out rounded cursor-pointer hover:text-indigo-700 focus:outline-none">
                            <div className="w-6 h-6 m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="9 6 15 12 9 18" />
                                </svg>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Pagination;
