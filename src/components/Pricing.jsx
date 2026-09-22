import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto h-[822px] bg-white py-[120px] px-6 lg:px-20'>
            <div className="flex flex-col items-center">
                <h2 className='text-5xl'>Simple, Transparent Pricing</h2>
                <p className='text-base text-[#627382FF] pt-[16px] '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-10">
                {/* 01 */}
                <div className="border border-gray-200/80 bg-[#f9fafcFF] rounded-lg h-[550px] ">
                    <div className="card bg-base-100 shadow-sm h-full">
                        <div className="card-body flex flex-col justify-between">

                            <div className="">
                                <div className="">
                                    <h2 className="text-3xl font-bold">Starter</h2>
                                    <p>Perfect for getting started</p>

                                </div>
                                <div className="my-6">
                                    <span className="text-xl font-bold">$0/Month</span>
                                </div>

                            </div>
                            <ul className="flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>
                                <li className="">

                                </li>
                                <li className="">

                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className='btn btn-primary w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Get Started Free</button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* 02 */}
                <div className="border border-gray-200/80  bg-white rounded-lg h-[550px]">

                    <div className="card bg-gradient-to-r from-[#4F39F6] to-[#9514FA] shadow-sm h-full">
                        <div className="flex justify-center text-white">
                            <span className="badge badge-xs badge-warning">Most Popular</span>
                        </div>
                        <div className="card-body flex flex-col justify-between">

                            <div className="text-white">

                                <div className="">
                                    <h2 className="text-3xl font-bold">Pro</h2>
                                    <p>Best for professionals</p>

                                </div>
                                <div className="my-6">
                                    <span className="text-xl font-bold">$29/Month</span>
                                </div>
                            </div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs text-white">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block ttext-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Advanced analytics</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn w-full rounded-full bg-white font-bold border-none shadow-md">
                                    <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                        Start Pro Trial
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>


                {/* 03 */}
                <div className="border border-gray-200/80 bg-[#f9fafcFF] rounded-lg h-[550px] ">
                    <div className="card bg-base-100 shadow-sm h-full">
                        <div className="card-body flex flex-col justify-between">

                            <div className="">
                                <div className="">
                                    <h2 className="text-3xl font-bold">Enterprise</h2>
                                    <p>For teams and businesses</p>

                                </div>
                                <div className="my-6">
                                    <span className="text-xl font-bold">$99/Month</span>
                                </div>

                            </div>
                            <ul className="flex flex-col gap-2 text-xs">

                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>SLA guarantee</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom branding</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className='btn btn-primary w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>Contact Sales</button>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

        </div>
    );
};

export default Pricing;