


import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteUser, setEdit, updateEditForm, saveUser } from "../redux/ManageSlice"
import { motion } from "framer-motion"
import { FiEdit2, FiTrash2, FiSave, FiX, FiCamera } from "react-icons/fi"

function Real() {
  const { users, editIndex, editForm } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleEditImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      dispatch(updateEditForm({ field: "image", value: reader.result }))
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Users List
      </h2>

      {users.length === 0 && (
        <p className="text-center text-gray-400 mt-20">
          No users found. Click <b>Add User</b> to get started 🚀
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5"
          >
            {editIndex === index ? (
              <div className="space-y-4">
                
                <div className="flex flex-col items-center">
                  <label className="relative group cursor-pointer">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={editForm.image || user.image}
                      alt="preview"
                      className="w-28 h-28 rounded-full object-cover border-2 border-teal-500 shadow
                                 group-hover:ring-4 group-hover:ring-teal-300 transition"
                    />

                    <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 
                                    group-hover:opacity-100 flex items-center justify-center transition">
                      <FiCamera className="text-white text-2xl" />
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleEditImageChange}
                      className="hidden"
                    />
                  </label>

                  <p className="text-xs text-gray-500 mt-2">
                    Click avatar to change photo
                  </p>
                </div>

                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) =>
                    dispatch(updateEditForm({ field: "name", value: e.target.value }))
                  }
                  placeholder="First Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                />

                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) =>
                    dispatch(updateEditForm({ field: "lastName", value: e.target.value }))
                  }
                  placeholder="Last Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                />

                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) =>
                    dispatch(updateEditForm({ field: "email", value: e.target.value }))
                  }
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                />

                <input
                  type="text"
                  value={editForm.number}
                  onChange={(e) =>
                    dispatch(updateEditForm({ field: "number", value: e.target.value }))
                  }
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 outline-none"
                />

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => dispatch(saveUser())}
                    className="flex-1 flex items-center justify-center gap-2 
                               bg-teal-600 text-white py-2 rounded-lg 
                               hover:bg-teal-700 transition"
                  >
                    <FiSave /> Save
                  </button>

                  <button
                    onClick={() => dispatch(setEdit({ user, index: null }))}
                    className="flex items-center justify-center bg-gray-200 px-3 
                               rounded-lg hover:bg-gray-300 transition"
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            ) : (


            <div className="flex flex-col items-center text-center">
                <img
                  src={user.image}
                  className="w-24 h-24 rounded-full object-cover border shadow mb-3"
                  alt="user"
                />

                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name} {user.lastName}
                </h3>

                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">{user.number}</p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => dispatch(setEdit({ user, index }))}
                    className="p-2 rounded-lg bg-blue-100 text-blue-600 
                               hover:bg-blue-200 transition"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() => dispatch(deleteUser(index))}
                    className="p-2 rounded-lg bg-red-100 text-red-600 
                               hover:bg-red-200 transition"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Real
