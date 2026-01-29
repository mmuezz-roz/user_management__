import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  editIndex: null,
  editForm: {
    image: "",
    name: "",
    lastName: "",
    email: "",
    number: ""
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: state.users.length, ...action.payload })
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload)
    },
    setEdit: (state, action) => {
      const { user, index } = action.payload
      state.editIndex = index
      state.editForm = { ...user } 
    },
    updateEditForm: (state, action) => {
      const { field, value } = action.payload
      state.editForm[field] = value
    },
    saveUser: (state) => {
      if (state.editIndex !== null && state.users[state.editIndex]) {
        state.users[state.editIndex] = {
          ...state.users[state.editIndex],
          ...state.editForm,
        }
      }
      state.editIndex = null;
      state.editForm = { image: "", name: "", lastName: "", email: "", number: "" }
    }
  },
})

export const { addUser, deleteUser, setEdit, updateEditForm, saveUser } = userSlice.actions
export default userSlice.reducer
