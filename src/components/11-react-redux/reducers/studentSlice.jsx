import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  students: [
    { id: '1', name: 'Jakkrit', score: 99 },
    { id: '2', name: 'Saovalak', score: 89 },
    { id: '3', name: 'Somsri', score: 73 },
  ],
  isLoading: false,
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getStudents: (state, action) => {
      return {
        ...state,
        students: action.payload,
      }
    },
    deletedStudent: (state, action) => {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      }
    },
    addedStudent: (state, action) => {
      return {
        ...state,
        students: [...state.students, action.payload],
      }
    },
    editedStudent: (state, action) => {
      return {
        ...state,
        students: [...state.students, action.payload],
      }
    },
  },
})

export const { getStudents, deletedStudent, addedStudent, editedStudent } =
  studentSlice.actions

export default studentSlice.reducer
