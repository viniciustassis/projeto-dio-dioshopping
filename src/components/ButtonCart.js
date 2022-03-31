import React from 'react';

const ButtonCart = ({ cart }) => {
    return (
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#CartModal">
            <span><i className="fas fa-shopping-cart"></i></span>
            <span className="badge rounded-pill bg-info text-dark">
                {cart.value}
            </span>
        </button>
    )
}

export default ButtonCart;