import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ isCart, setIsCart }) => {
    const totalPrice = isCart.reduce((sum, cart) => sum + cart.price, 0)

    const handleCheckOut = () => {
        setIsCart([])
        toast.success('Payment Completed')
    }
    const handleDelete = (cart) =>{
        const filteredArray = isCart.filter(c=> c.id !== cart.id)
        setIsCart(filteredArray)
        toast.error('Product is Deleted')

    }
    return (
        <div>
            <h2 className='text-5xl font-bold'>Your Cart</h2>
            {
                isCart.length === 0 ? <p>Your Cart is Empty</p> :
                    <>
                        {
                            isCart.map(cart =>

                                <div key={cart.id} className="mb-4 flex flex-row justify-between bg-gray-200 p-4">
                                    <div className="">
                                        <h2>{cart.title}</h2>
                                        <p>${cart.price} </p>
                                    </div>
                                    <div onClick={()=> handleDelete(cart)} className="text-red-400">
                                        Remove
                                    </div>
                                </div>



                            )
                        }
                        <div className="flex justify-between">
                            <h2>Total</h2>
                            <p className='font-bold'> ${totalPrice} </p>
                        </div>
                        <button onClick={handleCheckOut} className='btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] w-full text-center'>Proceed to Checkout</button>
                    </>
            }

        </div>
    );
};

export default Cart;