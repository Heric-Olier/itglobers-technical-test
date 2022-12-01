import { configureStore } from '@reduxjs/toolkit'
import { emailSlice } from './email/emailSlice'

export const store = configureStore({
  reducer: {
    email: emailSlice.reducer,
  },
})