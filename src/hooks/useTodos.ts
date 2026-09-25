import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { todoService } from "@/src/services/todo.service";
import type { CreateTodoRequest, UpdateTodoRequest } from "@/src/types/todo";

export function useTodo(id: number) {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => todoService.getById(id),
    enabled: !!id,
  });
}

export function useTodos() {
  const queryClient = useQueryClient();

  // Get all todos
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: todoService.getAll,
  });

  // Create todo
  const createTodo = useMutation({
    mutationFn: (data: CreateTodoRequest) => todoService.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  // Update todo
  const updateTodo = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTodoRequest }) =>
      todoService.update(id, data),

    onSuccess: (todo) => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      queryClient.setQueryData(["todos", todo.id], todo);
    },
  });

  // Delete todo
  const deleteTodo = useMutation({
    mutationFn: (id: number) => todoService.delete(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });

      queryClient.removeQueries({
        queryKey: ["todos", id],
      });
    },
  });

  return {
    // Query
    user: todosQuery.data?.user ?? null,
    todos: todosQuery.data?.todos ?? [],

    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    error: todosQuery.error,
    refetch: todosQuery.refetch,

    // Single todo
    useTodo,

    // Mutations
    createTodo,
    updateTodo,
    deleteTodo,
  };
}
