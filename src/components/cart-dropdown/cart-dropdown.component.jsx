import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

// CartDropdown component renders a dropdown containing cart items or a message if the cart is empty. 
// It also provides a button to navigate to the checkout page. 
// The cart data is obtained from a context provided by the CartContext provider.

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

