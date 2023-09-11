import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

// Checkout component is responsible for displaying the items in the shopping cart, including their details and a total price. 
// It accesses cart data from the CartContext and maps over the cartItems to render each item using the CheckoutItem component.

const Checkout = () => {
  const {cartItems, cartTotal} = useContext(CartContext)
  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => {
            const {id, name, quantity} = cartItem
            return (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        })}
        <span className='total'>Total : ${cartTotal} </span>
    </div>
  )
}

export default Checkout
