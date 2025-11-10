export interface AuthState {
  username: string;
  access_token: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export interface LoginResponse {
  username: string;
}
