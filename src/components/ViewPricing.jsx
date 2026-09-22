import React from 'react';

const ViewPricing = () => {
    return (
        <div className='max-w-7xl mx-auto h-[480px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-center py-[120px] px-[200px] '>
            <div className="text-white">
                <h2 className='text-4xl font-bold mb-4'>Ready to Transform Your Workflow?</h2>
                <div className="text-base mb-10">
                    <p >Join thousands of professionals who are already using Digitools to work smarter.</p>
                    <p>Start your free trial today.</p>
                </div>
            </div>
            <div className="">
                <div className="flex justify-center gap-4">
                    <button className='bg-white rounded-full'>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent p-2'>Explore Products</span>

                    </button>
                    <button className='btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent p-6 rounded-full text-white'>View Pricing</button>
                </div>
                <p className='text-base text-white mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </div>
    );
};

export default ViewPricing;


