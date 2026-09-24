import axios from "axios";
import { ApiError } from "./api-error";

export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status ?? 500;

    const message = error.response?.data?.message ?? "Something went wrong";

    throw new ApiError(message, statusCode);
  }

  if (error instanceof Error) {
    throw new ApiError(error.message);
  }

  throw new ApiError("Something went wrong");
};
