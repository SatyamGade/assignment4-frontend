import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="error">
      <h1 style={{marginBottom: "1rem"}}>404 Page not found!</h1>
      <li style={{listStyle: "none"}}>
        <Link to={"/admin/dashboard"} style={{color: "white", backgroundColor: "blue", padding: "0.5rem"}}>Back to Dashboard</Link>
      </li>
    </div>
  )
}

export default Error
