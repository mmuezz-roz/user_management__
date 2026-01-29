

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../redux/ManageSlice"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { FiUser, FiMail, FiPhone, FiUpload } from "react-icons/fi"
// import defaultAvatar from "../assets/default-avatar.png"
import defaultAvatar from "../assets/avatar-default.svg"

function Manage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    image: defaultAvatar,
    name: "",
    lastName: "",
    email: "",
    number: "",
  })

  const [preview, setPreview] = useState(defaultAvatar)
  const [msg, setMsg] = useState("")

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const previewUrl = URL.createObjectURL(file)
    setPreview(previewUrl)

    const reader = new FileReader()
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const HandleFunction = (e) => {
    e.preventDefault()

    if (!form.name || !form.lastName || !form.email || !form.number) {
      setMsg("⚠ Please fill in all fields")
      return
    }

    dispatch(addUser(form))
    setMsg("✅ User added successfully!")

    setTimeout(() => navigate("/"), 600)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-100 px-4">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={HandleFunction}
        className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-6 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create New User
        </h2>

        
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full border-2 border-teal-500 shadow overflow-hidden mb-2">
            <img
              src={preview}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer text-sm text-teal-700 font-medium">
            <FiUpload />
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        
        <Input
          icon={<FiUser />}
          placeholder="First Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Input
          icon={<FiUser />}
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />

        <Input
          icon={<FiMail />}
          placeholder="Email Address"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          icon={<FiPhone />}
          placeholder="Phone Number"
          value={form.number}
          onChange={(e) => setForm({ ...form, number: e.target.value })}
        />

        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2.5 rounded-xl font-semibold shadow-lg hover:opacity-90 active:scale-95 transition"
        >
          Create User
        </button>

        {msg && (
          <p className="text-center text-sm font-medium text-teal-700">
            {msg}
          </p>
        )}
      </motion.form>
    </div>
  )
}

export default Manage



function Input({ icon, ...props }) {
  return (
    <div className="flex items-center gap-2 border rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-teal-500 transition bg-white">
      <span className="text-gray-400">{icon}</span>
      <input
        {...props}
        className="w-full outline-none bg-transparent"
      />
    </div>
  )
}
