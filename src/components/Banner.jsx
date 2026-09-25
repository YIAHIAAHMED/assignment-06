import React from 'react';
import rectangleImg from '../assets/Rectangle 4.png'
import playImg from '../assets/Play.png'
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='lg:w-7xl md:w-full w-full lg:mx-auto md:mx-auto flex flex-col md:flex-row justify-between items-center p-2 md:p-8 lg:p-16 gap-8'>
            {/* left side of Banner */}
            <div className="w-full md:w-1/2">
                <div className="">
                    <h2 className='lg:p-5 flex items-center gap-2 text-base bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                        <img src={rectangleImg} alt={rectangleImg} />
                        New: AI-Powered Tools Available
                    </h2>

                    <div className="flex flex-col lg:text-5xl md:text-3xl text-2xl font-bold gap-4 mb-4">
                        <h2>Supercharge Your </h2>
                        <h2>Digital Workflow</h2>
                    </div>

                    <div className="flex flex-col lg:text-lg md:text-3xl text-[#627382FF] lg:mb-6 ">
                        <p>Access premium AI tools, design assets, templates, and productivity</p>
                        <p>software—all in one place. Start creating faster today</p>
                        <p>Explore Products</p>
                    </div>

                    {/* left bottom button */}
                    <div className="flex flex-row gap-3 h-12">
                        <button className='btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                        <button className=' btn bg-white flex items-center gap-2 whitespace-nowrap border rounded-full p-4'>
                            <img src={playImg} alt='play' />
                            Watch Demo
                        </button>
                    </div>
                </div>

            </div>


            {/* right side of Banner */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    className='w-full max-w-[400px]'
                    src={bannerImg} 
                    alt='banner'
                    
                />
            </div>
        </div>
    );
};

export default Banner;