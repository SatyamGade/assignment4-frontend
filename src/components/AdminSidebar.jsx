import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { HiMenuAlt4 } from "react-icons/hi"

const AdminSidebar = () => {

  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandler = ()=>{
    setPhoneActive(window.innerWidth < 1100);
  }

  useEffect(()=>{
    window.addEventListener("resize", resizeHandler);

    return ()=>{
      window.removeEventListener("resize", resizeHandler);
    }
  }, [])


  return (
    <>
      {phoneActive && <button id="hamburger" onClick={() => setShowModal(true)}><HiMenuAlt4 /></button>}
      <aside style={phoneActive ? {
        width: "20rem",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: showModal ? "0" : "-20rem",
        transition: "all 0.5s"
      } : {}}>
        <h2>Logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />
        {phoneActive && <button id="closeSidebar" onClick={()=> setShowModal(false)}>Close</button>}
      </aside>
    </>
  )
}


const Li = ({ url, text, location }) => (
  <li
    style={{
      backgroundColor: location.pathname===url ? "rgba(0, 115, 225, 0.1)" : "white",
    }}
  >
    <Link
      to={url}
      style={{ color: location.pathname===url ? "rgba(0, 115, 225)" : "black", }}
    >
      {text}
    </Link>
  </li>
)

const DivOne = ({ location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li url="/admin/dashboard" text="Dashboard" location={location} />
    </ul>
  </div>
)

const DivTwo = ({location})=>(
  <div>
    <h5>Sectors</h5>
    <ul>
      <Li url="/admin/dashboard/energy" text="Energy" location={location} />
      <Li url="/admin/dashboard/manufacturing" text="Manufacturing" location={location} />
      <Li url="/admin/dashboard/infotech" text="Information Technology" location={location} />
    </ul>
  </div>
)

export default AdminSidebar
