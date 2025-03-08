import "./styles.css"
export const UIInput = ({ full }) => {
  return <input
    style={full && { width: "auto" }}
    placeholder="Name"
    className="input"
  ></input>
}