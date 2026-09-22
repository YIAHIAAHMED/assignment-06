import React, { use } from 'react';

const Products = ({ productPromise }) => {
    const products = use(productPromise)
    console.log(products);
    return (
        <div className='w-full max-w-7xl mx-auto h-auto bg-white pt-20'>
            <div className="flex flex-col items-center gap-4">
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <div className="">
                    <p className='text-base text-[#627382FF] '>Choose from our curated collection of premium digital products designed </p>
                    <p className='text-base text-[#627382FF] text-center'>to boost your productivity and creativity.</p>
                </div>


            </div>
            <div className="flex items-center gap-4 h-12 justify-center pt-4">
                <button className="btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                    Products
                </button>

                <button className="btn bg-white rounded-full px-4">
                    Cart(0)
                </button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 pt-10">
                {products.map(product =>
                    <div key={product.id} className="border border-gray-200/80 rounded-2xl p-4">
                        <div className="">
                            <h3 className='text-2xl'>{product.title} </h3>
                            <p>{product.description} </p>
                            <p>{product.price}/{product.billing_type} </p>
                            <p>{product.badge} </p>
                            <ul>{product.features.map((feature, index) => (
                                <li key={index}>{feature} </li>
                            ))}

                            </ul>

                            <button className='btn btn-primary w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>{product.buy_now.button_text} </button>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default Products;