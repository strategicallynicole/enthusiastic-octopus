import React, { useState } from "react";
function Sidebar() {
    const [show, setShow] = useState(false);
    const [dash, setDash] = useState(true);
    return (
        <div>
            <div className="hidden w-64 bg-white shadow sm:block">
                <ul aria-orientation="vertical" className="py-6 bg-white rounded">
                    <li className="pt-5 pb-4 pl-6 text-sm leading-3 tracking-normal text-white bg-indigo-700 cursor-pointer focus:text-indigo-700 focus:outline-none">
                        <div onClick={() => setDash(!dash)} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="ml-2">Dashboard</span>
                        </div>
                        {dash && (
                            <ul className="pt-2">
                                <li className="flex items-center py-2 pl-8 mb-1 text-xs leading-3 tracking-normal text-white cursor-pointer">Stats</li>
                                <li className="flex items-center py-2 pl-8 mb-1 text-xs leading-3 tracking-normal text-white cursor-pointer">Lists</li>
                                <li className="flex items-center py-2 pl-8 text-xs leading-3 tracking-normal text-white cursor-pointer">Tables</li>
                            </ul>
                        )}
                    </li>
                    <li className="flex items-center py-2 pl-6 mt-4 mb-4 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                        <span className="ml-2">Products</span>
                    </li>
                    <li className="flex items-center py-2 pl-6 mb-4 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="ml-2">Performance</span>
                    </li>
                    <li className="flex items-center py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="ml-2">Deliverables</span>
                    </li>
                </ul>
            </div>
            {/*Mobile Menu*/}
            <div className={show ? " transform -translate-x-full w-64 shadow bg-white sm:hidden transition duration-150 ease-in-out relative" : " transform -translate-x-0 w-64 shadow bg-white sm:hidden transition duration-150 ease-in-out relative"} id="mobile-nav">
                <div className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 bg-indigo-700 rounded-tr rounded-br shadow cursor-pointer" onClick={() => setShow(!show)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <ul aria-orientation="vertical" className="py-6 bg-white rounded">
                    <li className="pt-5 pb-4 pl-6 text-sm leading-3 tracking-normal text-white bg-indigo-700 cursor-pointer focus:text-indigo-700 focus:outline-none">
                        <div onClick={() => setDash(!dash)} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="ml-2">Dashboard</span>
                        </div>
                        {dash && (
                            <ul className="pt-2">
                                <li className="flex items-center py-2 pl-8 mb-1 text-xs leading-3 tracking-normal text-white cursor-pointer">Stats</li>
                                <li className="flex items-center py-2 pl-8 mb-1 text-xs leading-3 tracking-normal text-white cursor-pointer">Lists</li>
                                <li className="flex items-center py-2 pl-8 text-xs leading-3 tracking-normal text-white cursor-pointer">Tables</li>
                            </ul>
                        )}
                    </li>
                    <li className="flex items-center py-2 pl-6 mt-4 mb-4 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                        </svg>
                        <span className="ml-2">Products</span>
                    </li>
                    <li className="flex items-center py-2 pl-6 mb-4 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                            <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="ml-2">Performance</span>
                    </li>
                    <li className="flex items-center py-2 pl-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="ml-2">Deliverables</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
