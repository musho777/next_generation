import { HashLoader } from 'react-spinners'
import './styles.css'
export const UIButton = ({ loading, full, type = "button", title }) => {
  return <button
    type={type}
    style={full && { width: "100%" }}
    className="button"
  >
    {loading ?
      <HashLoader size={12} color='white' /> :
      title
    }
  </button>
}