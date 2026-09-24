import { ApiError } from "./api-error";

export const handleApiError = (error: unknown): never => {
  throw ApiError.fromAxios(error);
};
