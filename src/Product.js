import React from 'react'
import './Product.css'
function Product({image,name,price}) {
    return (
        <div className='product'>
           <img className="product_image" src={image}/>
           <h3>{name}</h3>
           <h5>{price} ₹</h5>
        </div>
    )
}

export default Product

