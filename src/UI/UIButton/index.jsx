import { HashLoader } from 'react-spinners'
import './styles.css'
export const UIButton = ({ loading, full, type = "button", title, onClick = () => { } }) => {
  return <button
    type={type}
    onClick={() => onClick()}
    disabled={loading}
    style={full && { width: "100%" }}
    className="button"
  >
    {loading ?
      <HashLoader size={12} color='white' /> :
      title
    }
  </button>
}