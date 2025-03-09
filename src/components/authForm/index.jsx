import './styles.css'
export const AuthForm = ({ children, title, description }) => {
  return <div className="auth_form_wrapper">
    <div className="auth_form">
      <div className="auth_form_header">
        <p className="auth_form_title">{title}</p>
        <p className="auth_form_describe">{description}</p>
      </div>
      <>
        {children}
      </>
    </div>
  </div>
}