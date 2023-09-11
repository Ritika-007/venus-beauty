/*
So, this Button component is designed to create a button element with dynamic styling based 
on its buttonType prop. It applies CSS classes to the button based on the type of button, 
and you can pass additional props to the underlying <button> element using the otherProps 
spread. The component is also designed to render any content you provide between the <Button>
tags as the button's content.
*/
import "./button.styles.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
