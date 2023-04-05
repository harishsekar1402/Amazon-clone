import React from 'react'
import './assets/css/Product.css'
function Product({title,image,price,rating}) {
  return (
    <div className='product'>
          <img src={image} alt='product'></img>
    <div className='product-info'>
        <p>{title}</p>
        <p className='product-price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_,i)=>(
              <p>⭐</p>
          ))}
        
        </div>
    </div>
    <button className='btn'>Add to Cart</button>
</div>
  )
}

export default Product