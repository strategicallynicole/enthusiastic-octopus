import React, { useEffect, useState } from "react";
import Router from "next/router";

export default function Sidebar() {
    const [query, setQuery] = useState("");
    useEffect(() => {
        if (Router.router.asPath) {
            const item = Router.router.asPath;
            setQuery(item);
        }
    }, [Router]);
    console.log("query", query);
    const [menu, setMenu] = useState(false);
    const checkActive = () => {
        if (query.indexOf("inbox") !== -1) {
            return "inbox";
        } else if (query.indexOf("notebook") !== -1) {
            return "notebook";
        } else if (query.indexOf("notes") !== -1) {
            return "notebook";
        } else if (query.indexOf("calender_month_view") !== -1) {
            return "calender_month_view";
        } else if (query.indexOf("calender_week_view") !== -1) {
            return "calender_month_view";
        } else if (query.indexOf("calender_day_view") !== -1) {
            return "calender_month_view";
        } else if (query.indexOf("important") !== -1) {
            return "important";
        } else if (query.indexOf("projects") !== -1) {
            return "projects";
        } else if (query.indexOf("todo_project_files") !== -1) {
            return "projects";
        } else if (query.indexOf("todo_project_links") !== -1) {
            return "projects";
        } else if (query.indexOf("todo_project_notes") !== -1) {
            return "projects";
        } else if (query.indexOf("todo_project_todos") !== -1) {
            return "projects";
        }
        return "home";
    };
    return (
        <>
            {
                <div onClick={() => setMenu(!menu)} className="absolute inset-0 flex items-center justify-center w-8 h-8 m-auto mt-10 ml-0 text-gray-300 bg-gray-800 cursor-pointer rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </div>
            }
            {console.log("function", checkActive())}
            {menu && (
                <div className="fixed top-0 z-40 w-64 h-screen pt-10 overflow-y-scroll bg-gray-900 lg:overflow-y-auto lg:sticky lg:h-auto lg:w-72">
                    <div className="px-8">
                        <div className="flex items-center justify-between">
                            <div className="w-32">
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/todos/logo.png" alt="quicklist logo" />
                            </div>
                            <div onClick={() => setMenu(!menu)} className="ml-8 text-gray-700 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </div>
                        </div>
                        <ul className="flex flex-wrap my-10">
                            <li className="flex justify-start w-1/2 mb-6">
                                <a href="javascript:void(0)" className={checkActive() == "home" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-kanban" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={4} x2={10} y2={4} />
                                        <line x1={14} y1={4} x2={20} y2={4} />
                                        <rect x={4} y={8} width={6} height={12} rx={2} />
                                        <rect x={14} y={8} width={6} height={6} rx={2} />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">kanban</p>
                                </a>
                            </li>
                            <li className="flex justify-end w-1/2 mb-6">
                                <a href="javascript:void(0)" className={checkActive() == "inbox" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={4} y={4} width={16} height={16} rx={2} />
                                        <path d="M4 13h3l3 3h4l3 -3h3" />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">inbox</p>
                                </a>
                            </li>
                            <li className="flex justify-start w-1/2 mb-6">
                                <a href="javascript:void(0)" className={checkActive() == "notebook" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notebook" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
                                        <line x1={13} y1={8} x2={15} y2={8} />
                                        <line x1={13} y1={12} x2={15} y2={12} />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">notebook</p>
                                </a>
                            </li>
                            <li className="flex justify-end w-1/2 mb-6">
                                <a href="javascript:void(0)" className={checkActive() == "calender_month_view" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={4} y={5} width={16} height={16} rx={2} />
                                        <line x1={16} y1={3} x2={16} y2={7} />
                                        <line x1={8} y1={3} x2={8} y2={7} />
                                        <line x1={4} y1={11} x2={20} y2={11} />
                                        <rect x={8} y={15} width={2} height={2} />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">calendar</p>
                                </a>
                            </li>
                            <li className="flex justify-start w-1/2">
                                <a href="javascript:void(0)" className={checkActive() == "important" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">important</p>
                                </a>
                            </li>
                            <li className="flex justify-end w-1/2">
                                <a href="javascript:void(0)" className={checkActive() == "projects" ? "bg-gray-700 rounded-md text-gray-300 flex flex-col justify-center items-center w-20 h-20 p-4" : "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                        <polyline points="4 12 12 16 20 12" />
                                        <polyline points="4 16 12 20 20 16" />
                                    </svg>
                                    <p className="mt-1 text-xs font-semibold uppercase">projects</p>
                                </a>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between text-gray-600">
                            <h4 className="font-semibold uppercase">List</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-plus" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>
                        </div>
                        <ul className="mt-8 text-gray-600">
                            <li className="mb-5">Grocery Items</li>
                            <li className="mb-5">Family</li>
                            <li>Friends</li>
                        </ul>
                        <div className="my-20">
                            <div className="flex items-center justify-between text-gray-600">
                                <h4 className="font-semibold uppercase">Labels</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-plus" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg>
                            </div>
                            <ul className="mt-8 text-gray-600">
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-indigo-600 rounded-full" />
                                    Work Related
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-yellow-600 rounded-full" />
                                    Family
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-green-500 rounded-full" />
                                    Friends
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-purple-600 rounded-full" />
                                    Grocery
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full" />
                                    Utilities
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-pink-600 rounded-full" />
                                    Rental
                                </li>
                                <li className="flex items-center mb-5">
                                    <span className="w-2 h-2 mr-2 bg-red-600 rounded-full" />
                                    Maintenance
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center w-full px-8 py-4 text-xs text-gray-600 uppercase border-t border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-trash" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={4} y1={7} x2={20} y2={7} />
                            <line x1={10} y1={11} x2={10} y2={17} />
                            <line x1={14} y1={11} x2={14} y2={17} />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                        <p className="pl-2 cursor-pointer">trash</p>
                    </div>
                </div>
            )}
        </>
    );
}
