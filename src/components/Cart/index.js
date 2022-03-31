import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';
import ButtonCart from '../ButtonCart';
import Modal from '../Modal';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let totalPrice = 0;

    for(let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if(cart.value > 0){
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }

    return(
        <>
            <ButtonCart cart={cart} />

            {/* Modal */}
            <Modal dispatch={dispatch} cartActions={cartActions} cart={cart} totalPrice={totalPrice} />
        </>
    )
}

export default Cart;
