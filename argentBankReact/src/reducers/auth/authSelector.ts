import { RootState } from "../../store/store";

export const selectIsAuthentificated = (state : RootState)=> state.auth.isAuthenticated ;
export const selectUserProfile = (state : RootState) => state.auth.infoUser;
export const selectLoading = (state : RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;
export const selectInfoUser = (state : RootState) => state.auth.infoUser;