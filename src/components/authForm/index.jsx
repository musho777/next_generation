import './styles.css'
export const AuthForm = ({ children }) => {
  return <div className="auth_form_wrapper">
    <div className="auth_form">
      <div className="auth_form_header">
        <p className="auth_form_title">Sign Up</p>
        <p className="auth_form_describe">It’s quick and easy.</p>
      </div>
      <>
        {children}
      </>
    </div>
  </div>
}