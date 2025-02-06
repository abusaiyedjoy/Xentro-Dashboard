

const TextSection = () => {


    return (
        <div className="flex w-full gap-2">
            {/* Main Task Section */}
            <section className="flex flex-col w-full">
                <div className="flex flex-col justify-between bg-[#eaf2eb] h-[180px] mb-3 dark:bg-[#2f3630] p-4 rounded-md shadow-md w-full mx-auto">
                    <input
                        type="text"
                        placeholder="Enter a task"
                        className="text-gray-800 mt-10 outline-none bg-transparent dark:text-gray-200 text-lg font-medium"
                        
                    />
                    <div className="flex justify-between items-center">
                        

                        <button
                            className="bg-[#ccf2d1] dark:bg-green-700 font-medium text-green-800 dark:text-gray-100 text-sm px-4 py-2 rounded-lg"
                        >
                            ADD TASK
                        </button>
                    </div>
                </div>

               
            </section>

            
        </div>
    );
};

export default TextSection;
