import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
  id: number,
  username: string,
  token: string,
}

const initialState: AuthState = {
  id: 0,
  username: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, actions) => {
      state.username = actions.payload.username
      state.id = actions.payload.id
      if (actions.payload.token) {
        state.token = actions.payload.token
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer