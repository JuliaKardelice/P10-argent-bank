import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState } from './authType';


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (loginData: { email: string; password: string }) => {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.body.token); // Sauvegarde dans localStorage
        return data.body.token;
      } else {
        throw new Error(data.message); // Gestion de l'erreur
      }
    }
  );


const initialState:AuthState = {
  isAuthenticated: false,
  token: '',
  status: 'idle',
  error: ''
};

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