import api from "../lib/axios";

import type {
  Todo,
  GetTodosResponse,
  CreateTodoRequest,
  UpdateTodoRequest,
} from "@/src/types/todo";

import { ApiError } from "../lib/api-error";
import type { ApiResponse } from "../types/api";

export const todoService = {
  async create(data: CreateTodoRequest): Promise<Todo> {
    try {
      const response = await api.post<ApiResponse<Todo>>("/api/todos", data);

      return response.data.data!;
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async getAll(): Promise<GetTodosResponse> {
    try {
      const response =
        await api.get<ApiResponse<GetTodosResponse>>("/api/todos");

      return (
        response.data.data ?? {
          user: {
            id: "",
            name: null,
          },
          todos: [],
        }
      );
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async getById(id: number): Promise<Todo> {
    try {
      const response = await api.get<ApiResponse<Todo>>(`/api/todos/${id}`);

      return response.data.data!;
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async update(id: number, data: UpdateTodoRequest): Promise<Todo> {
    try {
      const response = await api.patch<ApiResponse<Todo>>(
        `/api/todos/${id}`,
        data,
      );

      return response.data.data!;
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete<ApiResponse>(`/api/todos/${id}`);
    } catch (error) {
      throw ApiError.fromAxios(error);
    }
  },
};
