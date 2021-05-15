import React from "react";
const Pagination = () => {
    return (
        <div>
            <div className="container py-8 mx-auto max-w-8xl">
                <div className="flex items-center justify-center">
                    <label htmlFor="jump" className="mr-4 text-base font-normal leading-normal text-gray-800">
                        Jump To Page
                    </label>
                    <input type="text" id="jump" defaultValue={04} className="w-16 px-1 py-1 text-base font-bold leading-normal text-center text-gray-800 bg-gray-100 rounded shadow outline-none" />
                </div>
            </div>
            ;
        </div>
    );
};
export default Pagination;
