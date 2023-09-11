import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout-item.styles.scss'

// CheckoutItem component is used to render an individual item in the checkout cart. 
// It displays the item's image, name, quantity (with increment and decrement buttons), price, and a button to remove the item from the cart. 
// Interaction with the cart like adding, removing, or clearing items is handled through the context functions obtained using useContext.

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem
  const {clearItemFromCart, addItemToCart, removeItemfromCart} = useContext(CartContext)
  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemfromCart(cartItem)
 
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
        </div> 
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler} >
            &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addItemHandler} >
            &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHandler} >&#10005;</div>
    </div>
  )
}

export default CheckoutItem
