import axios from "axios";

export class ApiError extends Error {
  statusCode: number;
  errors?: unknown;

  static fromAxios(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status ?? 500;
      const message =
        error.response?.data?.message ??
        error.message ??
        "Something went wrong";
      const errors = error.response?.data?.errors;

      return new ApiError(message, statusCode, errors);
    }

    if (error instanceof Error) {
      return new ApiError(error.message);
    }

    return new ApiError("Something went wrong");
  }

  constructor(message: string, statusCode = 500, errors?: unknown) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
