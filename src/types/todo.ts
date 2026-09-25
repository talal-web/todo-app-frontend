export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoUser {
  id: string;
  name: string | null;
}

export interface GetTodosResponse {
  user: TodoUser;
  todos: Todo[];
}

export interface CreateTodoRequest {
  title: string;
}

export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}
