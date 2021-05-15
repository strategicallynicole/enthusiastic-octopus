import React from "react";
const Pagination = () => {
    return (
        <div>
            <div className="container py-10 mx-auto max-w-8xl">
                <ul className="flex items-center justify-center">
                    <li>
                        <span className="flex p-1 mr-1 text-base font-bold leading-tight text-gray-500 transition duration-150 ease-in-out rounded hover:text-indigo-700 focus:outline-none sm:mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <span className="flex px-3 py-2 mx-2 text-base font-bold leading-tight text-indigo-700 transition duration-150 ease-in-out rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-white sm:mx-4 focus:outline-none">1</span>
                    </li>
                    <li>
                        <span className="flex px-3 py-2 mx-2 text-base font-bold leading-tight text-indigo-700 transition duration-150 ease-in-out rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-white sm:mx-4 focus:outline-none">2</span>
                    </li>
                    <li>
                        <span className="flex px-3 py-2 text-base font-bold leading-tight text-indigo-700 transition duration-150 ease-in-out rounded shadow hover:bg-indigo-600 hover:text-white focus:outline-none">...</span>
                    </li>
                    <li>
                        <span className="flex px-3 py-2 mx-2 text-base font-bold leading-tight text-indigo-700 transition duration-150 ease-in-out rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-white sm:mx-4 focus:outline-none">6</span>
                    </li>
                    <li>
                        <span className="flex px-3 py-2 mx-2 text-base font-bold leading-tight text-indigo-700 transition duration-150 ease-in-out rounded shadow cursor-pointer hover:bg-indigo-600 hover:text-white sm:mx-4 focus:outline-none">7</span>
                    </li>
                    <li>
                        <span className="flex p-1 ml-1 text-base font-bold leading-tight text-gray-500 transition duration-150 ease-in-out rounded hover:text-indigo-700 focus:outline-none sm:ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>
            ;
        </div>
    );
};
export default Pagination;
