import React from "react";
const Sidebar = () => {
    return (
        <div className="flex w-64">
            <ul aria-orientation="vertical" className="py-8 bg-white">
                <li className="px-6 py-2 text-indigo-700 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                    </svg>
                </li>
                <li className="flex items-center px-6 py-2 mt-6 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                    </svg>
                </li>
                <li className="flex items-center px-6 py-2 mt-6 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 16 10 10 16 8 14 14 8 16" />
                        <circle cx={12} cy={12} r={9} />
                    </svg>
                </li>
                <li className="flex items-center px-6 py-2 mt-6 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="7 8 3 12 7 16" />
                        <polyline points="17 8 21 12 17 16" />
                        <line x1={14} y1={4} x2={10} y2={20} />
                    </svg>
                </li>
            </ul>
            <ul className="w-full py-8 pl-3 bg-gray-100 border-gray-300 shadow-inner xl:pl-5">
                <li className="py-3 text-xs leading-3 tracking-normal text-white bg-indigo-700 rounded-l cursor-pointer xl:text-sm focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                        <span className="ml-2 xl:ml-4">Dashboard</span>
                    </div>
                </li>
                <li className="flex items-center pt-2 pb-2 mt-4 mb-4 text-xs leading-3 tracking-normal text-gray-600 cursor-pointer xl:text-sm hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <span className="ml-2 xl:ml-4">Statistics</span>
                </li>
                <li className="flex items-center py-2 mb-4 text-xs leading-3 tracking-normal text-gray-600 cursor-pointer xl:text-sm hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <span className="ml-2 xl:ml-4">Forecasting</span>
                </li>
                <li className="flex items-center py-2 text-xs leading-3 tracking-normal text-gray-600 cursor-pointer xl:text-sm hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <span className="ml-2 xl:ml-4">Comparables</span>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;
