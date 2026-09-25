import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({ product, setIsCart, isCart }) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true);

        const isFound = isCart.find(cart => cart.id === product.id)
        if (isFound) {
            toast.error('item already added in cart')
            return;
        }
        setIsCart([...isCart, product])
        toast.success('Buying Done');
    };
    return (
        <div key={product.id} className="border border-gray-200/80 rounded-2xl p-4">
            <div className="">
                <p className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                        ${product.badge === "Popular" ? "bg-yellow-100 text-yellow-800" :
                        product.badge === "Best Seller" ? "bg-purple-100 text-purple-800" :
                            product.badge === "New" ? "bg-green-100 text-green-700" :
                            product.badge === "Trending" ? "bg-green-100 text-green-400" :
                            product.badge === "Hot" ? "bg-green-100 text-green-500" :
                                "bg-gray-100 text-gray-700"}`}>
                    {product.badge}
                </p>
                <h3 className='text-2xl'>{product.title} </h3>
                <p>{product.description} </p>
                <p>${product.price}/{product.billing_type} </p>

                <ul>{product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}

                </ul>

                <button onClick={handleBuy} className='btn btn-primary w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>{isBuy ? 'Purchase completed' : 'Buy Now '} </button>
            </div>
        </div>
    );
};

export default Product;