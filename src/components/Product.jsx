import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({product, setIsCart, isCart}) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = ()=> {
        setIsBuy(true);

        const isFound = isCart.find(cart => cart.id === product.id)
        if(isFound){
            toast.error('item already added in cart')
            return;
        }
        setIsCart([...isCart, product])
        toast.success('Buying Done');
    };
    return (
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

                <button onClick={handleBuy} className='btn btn-primary w-full rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>{isBuy? 'Purchase completed': 'Buy Now '} </button>
            </div>
        </div>
    );
};

export default Product;