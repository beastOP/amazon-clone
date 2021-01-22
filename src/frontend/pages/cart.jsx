import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './css/cart.css'
import { useStateValue } from '../../StateProvider'

const Cart = () => {
  const [{items, basket, total},] = useStateValue()
  //const [bask, setBask] = useState([])
  //useEffect(() => setBask(basket), [basket])
  return (
    <div className='cart'>
        <div className='cart_container'>
        { items === 0 ? <h1>Cart is Empty! </h1> :
          <div className='cart_total'>
            <h3>Order Summary</h3>
            <div>
              <p>Items:</p><strong>{items}</strong>
            </div>
            <div>
              <p>Total:</p><strong>$ {total ? total : 0}</strong>
            </div>
            <div className='a'>
              <button><Link to='/checkout'>Checkout</Link></button>
            </div>
          </div> }
          <div className='cart_products'>
            {basket.map(item => <CartProduct item={item} /> )}
          </div>
        </div>
    </div>
  )
}

const CartProduct = ({ item }) => {
  const { id, title, imageSrc, price, rating , count} = item
  const [{ basket }, dispatch] = useStateValue()
  const [del, setDel] = useState(false)
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    setItemCount(basket.find(item => item.id === id).count)
  }, [basket, id])
  const deleteProduct = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      id: id,
      price: parseInt(price),
      count: count
    })
    setDel(!del)
  }
  return (
    <div className='cart_product'>
      <img src={imageSrc} alt={title} />
      <div className='cart_product_info'>
        <p>{title.substring(0,120)}...</p>
        <strong style={{display: 'flex', marginTop: '0.3em'}}>$ {price} </strong>
        <div style={{display: 'flex', marginTop: '0.3em'}}>
          {Array(rating).fill().map(i => <div>⭐</div>)} 
        </div>
        <div className='cart_button'>
          <span> Qty : {itemCount} </span> 
          <button onClick={deleteProduct}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
