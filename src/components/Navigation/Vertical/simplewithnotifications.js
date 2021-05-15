import React from "react";
function Sidebar() {
    return (
        <div>
            <div className="hidden w-64 pl-4 transition duration-150 ease-in-out bg-white border-r border-gray-300 shadow sm:block">
                <ul aria-orientation="vertical" className="py-8">
                    <li className="py-2 pl-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Dashboard</span>
                            <span className="flex items-center justify-center px-3 py-1 mr-3 text-white bg-indigo-700 rounded font-xs">5</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Products</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Performance</span>
                            <span className="flex items-center justify-center px-3 py-1 mr-3 text-gray-600 bg-gray-200 rounded font-xs">7</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Deliverables</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative w-64 pl-4 transition duration-150 ease-in-out bg-white border-r border-gray-300 shadow sm:hidden" id="mobile-nav">
                <div className="absolute right-0 flex items-center justify-center w-10 h-10 mt-16 -mr-10 bg-indigo-700 rounded-tr rounded-br shadow cursor-pointer" id="mobile-toggler" onclick="sidebarHandler()">
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
                <ul aria-orientation="vertical" className="py-8">
                    <li className="py-2 pl-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Dashboard</span>
                            <span className="flex items-center justify-center px-3 py-1 mr-3 text-white bg-indigo-700 rounded font-xs">5</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Products</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="w-32">Performance</span>
                            <span className="flex items-center justify-center px-3 py-1 mr-3 text-gray-600 bg-gray-200 rounded font-xs">7</span>
                        </div>
                    </li>
                    <li className="py-2 pl-2 mt-6 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                            <span className="mr-8">Deliverables</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
