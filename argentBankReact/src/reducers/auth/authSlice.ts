import { createSlice } from '@reduxjs/toolkit';
import { AuthState, userProfileInitial } from './authType';
import { fetchUserProfile, loginUser, updateUserProfile } from './authAction';


///recuperation donnée API



// slices pour les états 

// initialiser l'état 

const initialState:AuthState = {
  isAuthenticated: false,
  token: '',
  loading : false,
  error: '',
  infoUser : userProfileInitial,
  isEditingProfile : false

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
    },
    startProfileEdit : (state) => {
    state.isEditingProfile = true
    },
    cancelProfileEdit :(state) => {
    state.isEditingProfile = false  
    }
  },

  extraReducers : (builder) => {
builder
.addCase(loginUser.pending,(state) => {
state.loading = true;
state.error = ''
})

.addCase(loginUser.fulfilled, (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.token = action.payload;
})

.addCase(loginUser.rejected,(state,action) => {
state.loading = false;
state.error = action.payload as string;
    }
)
.addCase(fetchUserProfile.pending, (state) => {
  state.loading = true;
  state.error = "";
})
.addCase(fetchUserProfile.fulfilled, (state, action) => {
  state.infoUser = action.payload;
  state.loading = false;
})
.addCase(fetchUserProfile.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload as string;
})
.addCase(updateUserProfile.pending, (state) => {
  state.loading = true;
  state.error = "";
})
.addCase(updateUserProfile.fulfilled, (state, action) => {
  state.infoUser = action.payload;
  state.loading = false;
})
.addCase(updateUserProfile.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload as string;
});


}

}
);


export const { logout, cancelProfileEdit } = authSlice.actions;
export default authSlice.reducer;