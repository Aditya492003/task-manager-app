import { PenBoxIcon } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const Layout = () => {

  const navigate = useNavigate()

  return (

    <div className="flex flex-col h-screen">

      {/* Navbar */}

      <nav className="cursor-pointer bg-amber-50 w-full p-5 border-b border-amber-100">

        <PenBoxIcon
          onClick={() => navigate('/')}
          size={40}
        />

      </nav>


      {/* Main Layout */}

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}

        <Sidebar />


        {/* Page Content */}

        <div className="flex-1 p-5 overflow-auto bg-gray-100">

          <Outlet />

        </div>

      </div>

    </div>
  )
}

export default Layout