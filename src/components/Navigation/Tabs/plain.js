import React, { useState } from "react";
export default function Tabs() {
    const [activeStatus, setActiveStatus] = useState(1);
    return (
        <div className="container flex items-center justify-center w-full px-4 py-8 mx-auto">
            <ul className="items-center hidden w-full pb-2 border-b border-gray-200 md:flex">
                <li onClick={() => setActiveStatus(1)} className={activeStatus == 1 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Timeline
                </li>
                <li onClick={() => setActiveStatus(2)} className={activeStatus == 2 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Speakers
                </li>
                <li onClick={() => setActiveStatus(3)} className={activeStatus == 3 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Sponsors
                </li>
                <li onClick={() => setActiveStatus(4)} className={activeStatus == 4 ? "py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700" : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"}>
                    Additional Information
                </li>
            </ul>
            <div className="relative w-11/12 mx-auto bg-white rounded md:hidden">
                <div className="absolute inset-0 z-0 w-6 h-6 m-auto mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>
                <select aria-label="Selected tab" className="relative z-10 block w-full p-3 text-gray-600 bg-transparent border border-gray-300 rounded appearance-none form-select">
                    <option selected className="text-sm text-gray-600">
                        Timeline
                    </option>
                    <option className="text-sm text-gray-600">Speakers </option>
                    <option className="text-sm text-gray-600">Sponsors </option>
                    <option className="text-sm text-gray-600">Additional Information </option>
                </select>
            </div>
        </div>
    );
}
