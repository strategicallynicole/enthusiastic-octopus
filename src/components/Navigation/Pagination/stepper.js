import React, { useState } from "react";
const Pagination = () => {
    const [count, setCount] = useState(23);
    return (
        <div className="container py-8 mx-auto max-w-8xl">
            <div className="flex items-center justify-center">
                <ul className="flex">
                    <li className="flex flex-col justify-center">
                        <span onClick={() => setCount(count ? count - 1 : 0)} className="flex p-1 text-base font-bold leading-tight text-gray-500 rounded shadow cursor-pointer focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </span>
                    </li>
                    <li>
                        <input id="page_number" readOnly className="w-8 h-8 pl-2 mx-2 text-base text-indigo-700 rounded shadow focus:outline-none" value={count} />
                    </li>
                    <li className="flex flex-col justify-center">
                        <span onClick={() => setCount(count + 1)} className="flex p-1 text-base font-bold leading-tight text-gray-500 rounded shadow cursor-pointer focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </span>
                    </li>
                </ul>
                <div className="flex ml-8 rounded shadow">
                    <span className="p-2 text-base leading-tight text-gray-500 cursor-pointer focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </span>
                    <span className="p-2 text-base leading-tight text-gray-500 cursor-pointer focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={12} y1={5} x2={12} y2={19} />
                            <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Pagination;
