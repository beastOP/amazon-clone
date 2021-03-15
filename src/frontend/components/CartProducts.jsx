import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'


const CartProduct = ({ item }) => {
  const { id, title, imageSrc, price, rating , count} = item
  const [{ basket }, dispatch] = useStateValue()
  const [del, setDel] = useState(false)

  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    setItemCount(basket.find(item => item.id === id).count)
  }, [basket, id])

  const deleteProduct = () => {
    setDel(!del)
    setTimeout(() => {
    dispatch({
      type: 'DELETE_PRODUCT',
      id: id,
      price: parseInt(price),
      count: count
    })
    setDel(!del)
    }, 480)
  }
  return (
    <div className={del ? 'cart_product animate' : 'cart_product'}>
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

export default CartProduct
