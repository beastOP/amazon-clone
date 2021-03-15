import React from 'react'
import { Link } from 'react-router-dom'
import './css/cart.css'
import { useStateValue } from '../../StateProvider'
import CartProduct from '../components/CartProducts'

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


export default Cart
