// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div className="bg-yellow-600 w-screen flex justify-between items-center h-20 px-8 shadow-md">
      
//       <h1 className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer">
//         User Management
//       </h1>

  
//       <Link to={'/managing'}>
//         <button className="px-5 py-2 rounded-lg bg-white text-yellow-700 font-semibold shadow-md hover:bg-yellow-500 hover:text-white hover:shadow-lg active:scale-95 transition-all duration-300">
//           + Add User
//         </button>
//       </Link>
//     </div>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom"
import { FiUserPlus } from "react-icons/fi"

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
        
        <h1 className="text-xl font-bold text-gray-800 tracking-wide">
          User Management
        </h1>

        <Link to="/managing">
          <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 active:scale-95 transition">
            <FiUserPlus />
            Add User
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

