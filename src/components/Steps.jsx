import React from 'react';
import createImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='w-full max-w-7xl mx-auto lg:h-[754px] md:h-auto bg-[#f9fafcFF] py-[120px] lg:px-[200px] flex flex-col gap-[40px] '>
            <div className="flex flex-col items-center">
                <h2 className='lg:text-5xl md:text-4xl text-3xl'>Get Started in 3 Steps</h2>
                <p className='text-base text-[#627382FF] pt-[16px] '>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {/* 01 */}
                <div className="border border-gray-200/80  bg-white rounded-lg">
                    <div className="">
                        <div className="flex justify-end">
                            <button className='btn btn-primary w-12 h-12 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-right'>01 </button>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] items-center flex justify-center">
                                <img className='bg-[#ffffff00] ' src={createImg} alt='user' />
                            </div>
                            <h2 className='text-2xl'>Create Account</h2>
                            <p className='text-base text-[#627382FF] '>Sign up for free in seconds. No credit card </p>
                            <p className='text-base text-[#627382FF] '>required to get started.</p>
                        </div>
                    </div>


                </div>

                {/* 02 */}
                <div className="border border-gray-200/80 rounded-2xl  bg-white rounded-lg">
                    <div className="">
                        <div className="flex justify-end">
                            <button className='btn btn-primary w-12 h-12 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-right'>02 </button>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] items-center flex justify-center">
                                <img className='bg-[#ffffff00] ' src={packageImg} alt='Choose Products' />
                            </div>
                            <h2 className='text-2xl'>Choose Products</h2>
                            <p className='text-base text-[#627382FF]'>Browse our catalog and select the tools</p>
                            <p className='text-base text-[#627382FF] '>that fit your needs.</p>
                        </div>
                    </div>


                </div>


                {/* 03 */}
                <div className="border border-gray-200/80 rounded-2xl  bg-white rounded-lg">
                    <div className="">
                        <div className="flex justify-end">
                            <button className='btn btn-primary w-12 h-12 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-right'>03 </button>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-16 h-16 rounded-full bg-[#F3E8FF] items-center flex justify-center">
                                <img className='bg-[#ffffff00] ' src={rocketImg} alt='Rocket' />
                            </div>
                            <h2 className='text-2xl'>Start Creating</h2>
                            <p className='text-base text-[#627382FF] '>Download and start using your premium </p>
                            <p className='text-base text-[#627382FF] '>tools immediately.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Steps;