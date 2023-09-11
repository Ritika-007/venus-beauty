import './form-input.styles.scss'

// FormInput component is used to render an input field in a form. It can be configured with a label, 
// and when the user interacts with the input, the label can shrink or move to provide a better user experience. 
// The component accepts additional props that can be passed down to the underlying <input> element.

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
    <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
