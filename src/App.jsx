import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";

const Error = lazy(()=> import("./pages/Error"));

// admin import
const Dashboard = lazy(()=> import("./pages/admin/Dashboard"));
const Energy = lazy(()=> import("./pages/admin/Energy"));
const Manufacturing = lazy(()=> import("./pages/admin/Manufacturing"));
const InfoTech = lazy(()=> import("./pages/admin/InfoTech"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          
          {/* admin routes */}
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/dashboard/energy" element={<Energy />}/>
          <Route path="/admin/dashboard/manufacturing" element={<Manufacturing />}/>
          <Route path="/admin/dashboard/infotech" element={<InfoTech />}/>

          {/* error */}
          <Route path="*" element={<Error />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
