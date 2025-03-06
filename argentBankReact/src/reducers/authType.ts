


export interface AuthState {
    isAuthenticated : boolean,
    token : string,
    status : 'idle' | 'loading' | 'succeeded' | 'failed',
    error : string
    
  }
  