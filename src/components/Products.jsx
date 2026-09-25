import React, { use, useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const Products = ({ productPromise, isCart, setIsCart }) => {
    const products = use(productPromise)
    // console.log(products);

    // products or cart e dekhanur jonne
    const [activeTab, setActiveTab] = useState('Products')
    //   console.log(activeTab)





    return (
        <div className='w-full max-w-7xl mx-auto h-auto bg-white pt-20'>
            <div className="flex flex-col items-center gap-4">
                <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Premium Digital Tools</h2>
                <div className="">
                    
                    <div className="hidden sm:block  text-center text-base text-[#627382FF]">
                        <p>Choose from our curated collection of premium digital products designed</p>
                        <p>to boost your productivity and creativity.</p>
                    </div>

                    
                    <div className="block sm:hidden text-center text-base text-[#627382FF]">
                        <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    </div>
                </div>


            </div>
            <div className="flex items-center gap-4 h-12 justify-center pt-4">
                <div className="tabs">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full px-4
                                checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white"
                        aria-label="Products"
                        onClick={() => setActiveTab('Products')}
                        defaultChecked
                    />

                    <input
                        type="radio"
                        name="my_tabs_1"
                        className="tab rounded-full px-4
                                  checked:bg-gradient-to-r checked:from-[#4F39F6] checked:to-[#9514FA] checked:text-white"
                        aria-label={`Cart (${isCart.length})`}
                        onClick={() => setActiveTab('Cart')}
                    />
                </div>
            </div>
            {activeTab === 'Products' ? (<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-10">
                {products.map(product =>
                    <Product key={product.id} product={product} isCart={isCart} setIsCart={setIsCart} ></Product>
                )}
            </div>) : (<Cart isCart={isCart} setIsCart={setIsCart} ></Cart>)}


        </div>
    );
};

export default Products;