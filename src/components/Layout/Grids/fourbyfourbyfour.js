import React from "react";
function Grid() {
    return (
        <>
            <div className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="h-24 border-2 border-gray-300 border-dashed rounded dark:border-gray-700" />
            </div>
        </>
    );
}
export default Grid;
