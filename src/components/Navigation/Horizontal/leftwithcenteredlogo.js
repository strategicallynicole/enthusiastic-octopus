import React, { useState } from "react";
export default function Navigation() {
    const [show, setShow] = useState(null);
    const [profile, setProfile] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    return (
        <>
            <div className="w-full h-full bg-gray-200">
                {/* Code block starts */}
                <nav className="hidden bg-white shadow xl:block">
                    <div className="container px-6 mx-auto md:py-2 xl:py-0">
                        <div className="flex items-center justify-between">
                            <div className="inset-y-0 left-0 flex items-center bg-transparent outline-none">
                                <div className="inline-flex items-center justify-center text-gray-400 transition duration-150 ease-in-out rounded-md cursor-pointer hover:text-white focus:outline-none"></div>
                                <div className="items-center justify-center hidden md:flex sm:items-stretch sm:justify-start">
                                    <div className="hidden md:flex">
                                        <a className="block py-6 text-sm leading-5 text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-700 focus:outline-none focus:text-indigo-700">Dashboard</a>
                                        <a className="relative flex items-center py-6 mx-10 text-sm leading-5 text-indigo-700 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-700 focus:outline-none focus:text-indigo-700" onClick={() => setProduct(!product)}>
                                            Products
                                            <span className="pl-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                            {product && (
                                                <ul className="absolute left-0 w-32 py-1 mt-2 mt-40 -ml-4 bg-white rounded shadow ">
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Landing Pages</li>
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Templates</li>
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Components</li>
                                                </ul>
                                            )}
                                        </a>
                                        <a className="block py-6 text-sm leading-5 text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-700 focus:outline-none focus:text-indigo-700">Performance</a>
                                        <a className="relative flex items-center py-6 mx-10 text-sm leading-5 text-indigo-700 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-700 focus:outline-none focus:text-indigo-700" onClick={() => setDeliverables(!deliverables)}>
                                            Deliverables
                                            <span className="pl-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </span>
                                            {deliverables && (
                                                <ul className="absolute left-0 w-32 py-1 mt-2 mt-40 -ml-4 bg-white rounded shadow ">
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Landing Pages</li>
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Templates</li>
                                                    <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer hover:bg-indigo-700 hover:text-white">Components</li>
                                                </ul>
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center md:pr-10">
                                <svg aria-label="Home" className="w-12 h-12" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path
                                            fill="#4c51bf"
                                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className="items-center justify-end hidden xl:flex">
                                <div className="flex items-center p-1 py-6 mr-0 text-gray-400 transition duration-150 ease-in-out border-l border-gray-300 cursor-pointer sm:px-10 hover:text-gray-300 focus:outline-none">
                                    <input type="text" className="w-0 text-xs transition duration-150 ease-in-out bg-transparent focus:outline-none" placeholder="Type something..." />
                                    <svg onclick="searchHandler(this)" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>

                                <div className="relative p-1 px-4 py-6 mr-0 text-gray-400 transition duration-150 ease-in-out border-l border-r border-gray-300 cursor-pointer sm:px-10 hover:text-gray-700 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                    </svg>
                                    <div className="absolute top-0 right-0 pt-1 pr-1 mt-6 mr-4 sm:mr-10">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                    </div>
                                </div>
                                <div className="relative ml-6">
                                    <div className="flex items-center">
                                        <div className="flex w-12 text-sm transition duration-150 ease-in-out border-2 border-transparent rounded cursor-pointer focus:outline-none focus:border-white" onClick={() => setProfile(!profile)}>
                                            <img className="object-cover w-10 h-10 rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png" alt="logo" />
                                        </div>
                                        <p className="hidden ml-2 text-sm text-gray-800 cursor-pointer sm:block">Jane Doe</p>
                                        <div className="relative text-gray-800 sm:ml-2">
                                            {profile && (
                                                <ul className="absolute left-0 w-40 p-2 mt-8 -ml-32 bg-white border-r rounded shadow ">
                                                    <li className="py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={12} cy={7} r={4} />
                                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                            </svg>
                                                            <span className="ml-2">My Profile</span>
                                                        </div>
                                                    </li>
                                                    <li className="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx={12} cy={12} r={9} />
                                                            <line x1={12} y1={17} x2={12} y2="17.01" />
                                                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                        </svg>
                                                        <span className="ml-2">Help Center</span>
                                                    </li>
                                                    <li className="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                            <circle cx={12} cy={12} r={3} />
                                                        </svg>
                                                        <span className="ml-2">Account Settings</span>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}
                <nav>
                    <div className="fixed top-0 z-0 flex items-center justify-between w-full px-6 py-4 bg-white xl:hidden">
                        <div className="w-24">
                            <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                                    fill="#667EEA"
                                />
                            </svg>
                        </div>
                        <div>
                            <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                                {show ? (
                                    ""
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1={4} y1={6} x2={20} y2={6} />
                                        <line x1={4} y1={12} x2={20} y2={12} />
                                        <line x1={4} y1={18} x2={20} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 xl:hidden " : "xl:hidden   w-full h-full absolute z-40  transform -translate-x-full"}>
                        <div className="w-full h-full bg-gray-800 opacity-50" onClick={() => setShow(!show)} />
                        <div className="fixed top-0 z-40 flex-col justify-between w-64 h-full pb-4 overflow-y-auto transition duration-150 ease-in-out bg-white shadow xl:hidden">
                            <div className="h-full px-6">
                                <div className="flex flex-col justify-between w-full h-full">
                                    <div>
                                        <div className="flex items-center justify-between w-full mt-6">
                                            <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                                                            fill="#667EEA"
                                                        />
                                                    </svg>
                                                    <p className="ml-3 text-base text-gray-800">The North</p>
                                                </div>
                                                <div id="cross" className="text-gray-800 " onClick={() => setShow(!show)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <line x1={18} y1={6} x2={6} y2={18} />
                                                        <line x1={6} y1={6} x2={18} y2={18} />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="f-m-m">
                                            <a className="cursor-pointer">
                                                <li className="pt-10 text-gray-800">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 text-gray-800 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                                                <rect x={14} y={14} width={6} height={6} rx={1} />
                                                            </svg>
                                                        </div>
                                                        <p className="ml-3 text-base text-gray-800 xl:text-base md:text-2xl">Dashboard</p>
                                                    </div>
                                                </li>
                                            </a>
                                            <a className="cursor-pointer">
                                                <li className="pt-8 text-indigo-700">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-6 h-6 text-indigo-700 md:w-8 md:h-8">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                                </svg>
                                                            </div>
                                                            <p className="ml-3 text-base text-indigo-700 xl:text-base">Products</p>
                                                        </div>
                                                        {product ? (
                                                            <div onClick={() => setProduct(!product)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <polyline points="6 15 12 9 18 15" />
                                                                </svg>
                                                            </div>
                                                        ) : (
                                                            <div onClick={() => setProduct(!product)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <polyline points="6 9 12 15 18 9" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {product && (
                                                        <div>
                                                            <ul className="my-3">
                                                                <li className="px-6 py-2 text-base text-indigo-500 xl:text-base md:text-2xl hover:text-white">Best Sellers</li>
                                                                <li className="px-6 py-2 text-base text-gray-800 xl:text-base md:text-2xl hover:text-indigo-500">Out of Stock</li>
                                                                <li className="px-6 py-2 text-base text-gray-800 xl:text-base md:text-2xl hover:text-indigo-500">New Products</li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            </a>
                                            <a className="cursor-pointer">
                                                <li className="pt-8 text-gray-800">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 text-gray-800 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                                <circle cx={12} cy={12} r={9} />
                                                            </svg>
                                                        </div>
                                                        <p className="ml-3 text-base text-gray-800 xl:text-base md:text-2xl">Performance</p>
                                                    </div>
                                                </li>
                                            </a>
                                            <a className="cursor-pointer">
                                                <li className="pt-8 text-indigo-700">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <div className="w-6 h-6 text-indigo-700 md:w-8 md:h-8">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                                                                    <path d="M5.83333 6.66667L2.5 10L5.83333 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M14.1667 6.66667L17.5 10L14.1667 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M11.6667 3.33333L8.33333 16.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <p className="ml-3 text-base text-indigo-700 xl:text-base">Deliverables</p>
                                                        </div>
                                                        {deliverables ? (
                                                            <div onClick={() => setDeliverables(!deliverables)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <polyline points="6 15 12 9 18 15" />
                                                                </svg>
                                                            </div>
                                                        ) : (
                                                            <div onClick={() => setDeliverables(!deliverables)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                    <polyline points="6 9 12 15 18 9" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                    {deliverables && (
                                                        <div>
                                                            <ul className="my-3">
                                                                <li className="px-6 py-2 text-base text-indigo-500 xl:text-base md:text-2xl hover:text-white">Best Sellers</li>
                                                                <li className="px-6 py-2 text-base text-gray-800 xl:text-base md:text-2xl hover:text-indigo-500">Out of Stock</li>
                                                                <li className="px-6 py-2 text-base text-gray-800 xl:text-base md:text-2xl hover:text-indigo-500">New Products</li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                    <div className="w-full pt-4">
                                        <div className="flex justify-center w-full mb-4">
                                            <div className="relative w-full">
                                                <div className="absolute inset-0 w-4 h-4 m-auto ml-4 text-gray-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" />
                                                        <circle cx={10} cy={10} r={7} />
                                                        <line x1={21} y1={21} x2={15} y2={15} />
                                                    </svg>
                                                </div>
                                                <input className="w-full py-2 pl-10 text-sm text-gray-500 bg-gray-100 rounded focus:outline-none" type="text" placeholder="Search" />
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-300">
                                            <div className="flex items-center justify-between w-full pt-1">
                                                <div className="flex items-center">
                                                    <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                    <p className="ml-2 text-base leading-4 text-gray-800 ">Jane Doe</p>
                                                </div>
                                                <ul className="flex">
                                                    <li className="pt-5 pb-3 text-gray-800 cursor-pointer">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-messages" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                    <li className="pt-5 pb-3 pl-3 text-gray-800 cursor-pointer">
                                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Sidebar ends */}
                {/* Code block ends */}
            </div>
        </>
    );
}
