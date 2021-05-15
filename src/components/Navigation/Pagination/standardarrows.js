import React from "react";
const Pagination = () => {
    return (
        <div>
            <div className="container py-8 mx-auto max-w-8xl">
                <div className="flex justify-center">
                    <div className="flex items-center justify-center w-8 h-8 mr-5 text-gray-500 transition duration-150 ease-in-out rounded-full shadow cursor-pointer hover:text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 text-gray-500 transition duration-150 ease-in-out rounded-full shadow cursor-pointer hover:text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
};
export default Pagination;
