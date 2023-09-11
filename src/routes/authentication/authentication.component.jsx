import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authentication.styles.scss'

// Authentication component imports and renders two other components (SignInForm and SignUpForm) to create a user authentication page. 
// The imported components are responsible for handling user login and registration.

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication 
