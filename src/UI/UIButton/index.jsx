import './styles.css'
export const UIButton = ({ full }) => {
  return <button style={full && { width: "100%" }} className="button">ok</button>
}