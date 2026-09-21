import React from 'react';

const StatusSection = () => {
    return (
        <div className='w-full max-w-7xl h-[233px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mx-auto flex justify-between items-center gap-20 text-white'>
            <div className="pl-40 flex flex-col gap-4">
                <h2 className='text-[60px]'>50K+</h2>
                <h4 className='text-2xl'>Active Users</h4>
            </div>
            <div className="h-20 w-px bg-gray-300"></div>

            <div className="flex flex-col gap-4">
                <h2 className='text-[60px]'>200+</h2>
                <h4 className='text-2xl'>Premium Tools</h4>
            </div>
            <div className="h-20 w-px bg-gray-300"></div>

            <div className="pr-40 flex flex-col gap-4">
                <h2 className='text-[60px]'>4.9</h2>
                <h4 className='text-2xl'>Rating</h4>
            </div>
            
        </div>
    );
};

export default StatusSection;