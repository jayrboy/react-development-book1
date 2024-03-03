import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterReducer'
import studentReducer from './studentReducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
  },
})

export default store
