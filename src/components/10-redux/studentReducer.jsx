import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  students: [
    { id: 1, name: 'Jeerawuth', score: 98 },
    { id: 3, name: 'Sombat', score: 87 },
  ],
}

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    add: (state, action) => {
      state.students.push(action.payload)
    },
    del: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      )
    },
  },
})

export const { add, del } = studentSlice.actions
export default studentSlice.reducer
