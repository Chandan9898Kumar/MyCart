import React from "react";
const CartProducts = (props) => {
    const { prods } = props
    return (
        <>
            <div className="products">
                <img  src={prods.images[0]} alt={prods.images[0]} />
                <div className="productDesc">
                <span style={{ fontWeight: 800 }}>{prods.title}</span>
                </div>
            </div>

        </>
    )
}
export default CartProducts;