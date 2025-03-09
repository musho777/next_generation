import './styles.css'
export const UIButton = ({ full, type = "button", title }) => {
  return <button
    type={type}
    style={full && { width: "100%" }}
    className="button"
  >
    {title}
  </button>
}