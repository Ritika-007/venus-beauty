import './cart-item.styles.scss';

// CartItem component renders an individual item from the cart. 
// It displays the item's image, name, quantity, and price through the cartItem prop, with styles applied through CSS classes. 

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
