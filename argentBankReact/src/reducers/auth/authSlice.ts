import { createSlice } from '@reduxjs/toolkit';
import { AuthState, userProfileInitial } from './authType';
import { loginUser } from './authAction';


///recuperation donnée API



// slices pour les états 

// initialiser l'état 

const initialState:AuthState = {
  isAuthenticated: false,
  token: '',
  status: 'idle',
  error: '',
  infoUser : userProfileInitial
};

// creation des slices pour l'authentification et des reducers

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = '';
      localStorage.removeItem('token');
    }
  },

  extraReducers : (builder) => {
builder
.addCase(loginUser.pending,(state) => {
state.status = 'loading'
})

.addCase(loginUser.fulfilled, (state, action) => {
    state.isAuthenticated = true;
    state.status = 'succeeded';
    state.token = action.payload;
})

.addCase(loginUser.rejected,(state,action) => {
state.status = 'failed';
state.error = action.payload as string;
    }
)
}

}
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;