import React from "react";
function Grid() {
    return (
        <>
            <div className="container pt-6 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full pb-6 md:w-1/4 md:pb-0 md:pr-6">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                    </div>
                    <div className="w-full md:w-3/4">
                        {/* Remove class [ h-24 ] when adding a card block */}
                        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                        <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Grid;
