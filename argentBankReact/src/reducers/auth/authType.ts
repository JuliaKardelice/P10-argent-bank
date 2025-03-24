

// definition des interfaces 

export interface AuthState {
    isAuthenticated : boolean,
    token : string,
    status : 'idle' | 'loading' | 'succeeded' | 'failed',
    error : string,
    infoUser : UserProfile
  }
  
export interface UserProfile {
  email : string,
  firstName: string,
  lastName: string,
  userName: string,

}

export const userProfileInitial:UserProfile = {
email : '',
firstName : '',
lastName : '',
userName : ''
}