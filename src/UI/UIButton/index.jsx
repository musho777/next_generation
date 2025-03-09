import './styles.css'
export const UIButton = ({ full, type = "button" }) => {
  return <button
    type={type}
    style={full && { width: "100%" }}
    className="button"
  >
    ok
  </button>
}