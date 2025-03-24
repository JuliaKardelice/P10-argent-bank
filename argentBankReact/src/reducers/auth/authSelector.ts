import { RootState } from "../../store/store";

export const selectIsAuthentificated = (state : RootState)=> state.auth.isAuthenticated ;
export const selectUserProfile = (state : RootState) => state.auth.infoUser;