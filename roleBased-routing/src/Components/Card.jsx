

const MediaCard = () => {
    return (
        <div className="max-w-lg w-[300px] bg-white shadow-lg rounded-2xl flex align-center flex-col justify-center max-h-md h-[300px] mt-5">

            <div className="p-4 flex align-center justify-center flex-col">
                <h2 className="text-xl font-semibold text-gray-800 my-2">post title</h2>
                <p className="text-gray-600 text-sm mt-2">post about something</p>
            </div>


            <div className="p-4 flex align-center justify-center">
                <button className=" bg-red-600 text-white p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer mx-3">
                    Delete
                </button>
                <button className=" bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default MediaCard;


