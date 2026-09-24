import React from 'react';

const StatusSection = () => {
    return (
        <div className='w-full max-w-7xl min-h-[233px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 px-6 md:px-10 lg:px-20 py-10 md:py-0 text-white'>

            <div className="flex flex-col items-center gap-2 md:gap-4">
                <h2 className='text-4xl sm:text-5xl lg:text-[60px]'>50K+</h2>
                <h4 className='text-lg sm:text-xl lg:text-2xl'>Active Users</h4>
            </div>

            <div className="w-20 h-px md:w-px md:h-20 bg-gray-300"></div>

            <div className="flex flex-col items-center gap-2 md:gap-4">
                <h2 className='text-4xl sm:text-5xl lg:text-[60px]'>200+</h2>
                <h4 className='text-lg sm:text-xl lg:text-2xl'>Premium Tools</h4>
            </div>

            <div className="w-20 h-px md:w-px md:h-20 bg-gray-300"></div>

            <div className="flex flex-col items-center gap-2 md:gap-4">
                <h2 className='text-4xl sm:text-5xl lg:text-[60px]'>4.9</h2>
                <h4 className='text-lg sm:text-xl lg:text-2xl'>Rating</h4>
            </div>

        </div>
    );
};

export default StatusSection;