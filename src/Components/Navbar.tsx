import { Link } from 'react-router-dom'
import logo from '../assets/fourteenzones.jpg'

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white text-gray-800 shadow-lg z-50 border-r border-gray-200">
      <div className="p-6">

        <div className="mb-4 flex justify-center">
          <Link to="/">
            <img src={logo} alt="14 ZONES Logo" className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        <nav className="space-y-2">
          <Link to="/api" className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
            API Integration
          </Link>
          <Link to="/about" className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"> 
            About this Project
          </Link>
        </nav>

      </div>
    </div>
  )
}

export default Navbar