export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUser {
  id: string;
  name: string;
  email: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: RegisterUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginUser {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: LoginUser;
  };
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}

export interface CurrentUserResponse {
  success: boolean;
  message: string;
  data: LoginUser;
}
