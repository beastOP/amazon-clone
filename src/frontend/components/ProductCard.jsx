import React from 'react'
import {Link} from 'react-router-dom'
import './css/ProductCard.css'
import { useStateValue } from '../../StateProvider'

const ProductCard = ({ id, title, price, rating, imageSrc }) => {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue()
  const item = basket.find(item => item.id === id)
  const addToCart = () => {
    if(item) {
      dispatch({
        type: 'UPDATE_ITEM_COUNT',
        id: id,
        price: parseInt(price)
      })
    } else {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          count: 1,
          id: id,
          title: title,
          price: parseInt(price),
          rating: rating,
          imageSrc: imageSrc
        }
      })
    }
  }
  return (
    <div key={id} className="product">
      <div className="product_image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="product_info">
        <Link to={'/products/' + id}>{title.substring(0,100)}...</Link>
        <div className="product_price">
          <strong>$ {price}</strong>
        </div>
        <div className="product_rating">
          {Array(rating).fill().map((_,i) => <p>⭐</p>)}
        </div>
      </div>
      <button onClick={addToCart} className="product_btn">Add To Cart</button>
    </div>
  )
}

export default ProductCard
