const Tabs = (props) => (
    <div>
        <div className="container px-6 py-20 mx-auto">
            <div className="px-4 mb-20 xl:px-0">
                <ul className="items-center hidden text-lg md:flex">
                    <li className="flex items-center px-5 pb-3 ml-4 mr-16 text-yellow-600 border-b-4 border-indigo-700">
                        <div className="flex items-center justify-center w-6 h-6 mr-2 text-xs text-indigo-700 bg-indigo-100 rounded-full">05</div>
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Todos</a>
                        </p>
                    </li>
                    <li className="flex items-center px-5 pb-3 ml-4 mr-16 text-yellow-600 cursor-pointer">
                        <div className="flex items-center justify-center w-6 h-6 mr-2 text-xs text-indigo-700 bg-indigo-100 rounded-full">05</div>
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Notes</a>
                        </p>
                    </li>
                    <li className="flex items-center px-5 pb-3 ml-4 mr-16 text-yellow-600 cursor-pointer">
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Links</a>
                        </p>
                    </li>
                    <li className="flex items-center px-5 pb-3 ml-4 mr-16 text-yellow-600 cursor-pointer">
                        <p className="text-gray-700">
                            <a href="javascript:void(0)">Files</a>
                        </p>
                    </li>
                </ul>
                <hr className="hidden -mt-1 border-t-4 border-gray-300 md:block" />
            </div>
            <div className="flex items-center justify-between w-full my-10 border-b border-gray-500 md:hidden">
                <p className="text-xs text-yellow-600 border-b-2 border-indigo-700">
                    <a href="javascript:void(0)">Todos</a>
                </p>
                <p className="text-xs text-gray-700">
                    <a href="javascript:void(0)">Notes</a>
                </p>
                <p className="text-xs text-gray-700">
                    <a href="javascript:void(0)">Links</a>
                </p>
                <p className="text-xs text-gray-700">
                    <a href="javascript:void(0)">Files</a>
                </p>
            </div>
        </div>
    </div>
);
export default Tabs;
