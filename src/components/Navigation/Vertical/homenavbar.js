import React, { useState } from "react";
export default function Sidebar() {
    const [show, setShow] = useState(null);

    return (
        <>
            <div className={show ? "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow  flex-col justify-between pb-12 transition duration-150 h-full ease-in-out transform  translate-x-0" : "lg:w-96 w-64 z-40 fixed z-40 top-0 bg-gray-800 shadow  flex-col justify-between pb-12 transition duration-150 ease-in-out transform  -translate-x-full"}>
                {" "}
                <div className="flex items-center justify-between px-4 pt-16 lg:px-6">
                    <a href="javascript:void(0)" className="cursor-pointer">
                        <img src="https://i.ibb.co/z7zB0mg/REELS.png" className="w-16 lg:w-28" />
                    </a>
                    <div className="hidden cursor-pointer lg:block" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                    <div className="block cursor-pointer lg:hidden" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 40 40" fill="none">
                            <rect x="4.09033" y="0.0544434" width={50} height={5} rx="2.5" transform="rotate(45 4.09033 0.0544434)" fill="white" />
                            <rect x="0.554688" y="36.4097" width={50} height={5} rx="2.5" transform="rotate(-45 0.554688 36.4097)" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="px-4 lg:px-6">
                    <ul className="mt-36">
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="px-5 py-3 text-base font-bold text-white bg-indigo-700 rounded-full hover:bg-indigo-700 lg:py-6 lg:px-10">Home</li>
                        </a>
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="px-5 py-3 my-6 text-base font-bold text-white rounded-full lg:py-6 lg:px-10 hover:bg-indigo-700">Gallery</li>
                        </a>
                        <a href="javascript:void(0)" className="cursor-pointer">
                            <li className="px-5 py-3 text-base font-bold text-white rounded-full lg:py-6 lg:px-10 hover:bg-indigo-700">Contact</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="container relative h-full px-4 mx-auto lg:px-0">
                <div className="absolute items-center hidden w-full px-4 pt-16 lg:flex 2xl:px-0">
                    <div className="pr-6 cursor-pointer" onClick={() => setShow(!show)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={31} viewBox="0 0 50 31" fill="none">
                            <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                            <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                            <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" className="cursor-pointer">
                        <img src="https://i.ibb.co/rxRwqvX/REELS.png" className="w-28" />
                    </a>
                </div>
                <nav className="lg:hidden">
                    <div className="flex items-center px-4 pt-8">
                        <div className="pr-6 cursor-pointer" onClick={() => setShow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 50 31" fill="none">
                                <rect x={50} y={31} width={50} height={5} rx="2.5" transform="rotate(180 50 31)" fill="#251F2C" />
                                <rect x={50} y={5} width={50} height={5} rx="2.5" transform="rotate(180 50 5)" fill="#251F2C" />
                                <rect x={35} y={18} width={35} height={5} rx="2.5" transform="rotate(180 35 18)" fill="#251F2C" />
                            </svg>
                        </div>
                        <a href="javascript:void(0)">
                            <div>
                                <img src="https://i.ibb.co/rxRwqvX/REELS.png" className="w-20" />
                            </div>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}
