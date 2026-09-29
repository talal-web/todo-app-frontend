import api from "../lib/axios";

import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  LoginUser,
  LogoutResponse,
} from "@/src/types/auth";

import { ApiError } from "../lib/api-error";
import type { ApiResponse } from "../types/api";

export const authService = {
  async register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const response = await api.post<ApiResponse<RegisterResponse["data"]>>(
        "/api/auth/register",
        data,
      );

      return {
        success: response.data.success,
        message: response.data.message,
        data: response.data.data!,
      };
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await api.post<ApiResponse<LoginResponse["data"]>>(
        "/api/auth/login",
        data,
      );

      return {
        success: response.data.success,
        message: response.data.message,
        data: response.data.data!,
      };
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async logout(): Promise<LogoutResponse> {
    try {
      const response = await api.post<ApiResponse>("/api/auth/logout");

      return {
        success: response.data.success,
        message: response.data.message,
      };
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async getCurrentUser(): Promise<LoginUser> {
    try {
      const response = await api.get<ApiResponse<LoginUser>>("/api/auth/me");

      return response.data.data!;
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },
};
