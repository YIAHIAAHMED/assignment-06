import React from 'react';

const Cart = ({isCart}) => {
    console.log(isCart)
    return (
        <div>
            {
                isCart.map(cart => 
                    <div key={cart.id} className="">
                        <h2>{cart.title}</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;