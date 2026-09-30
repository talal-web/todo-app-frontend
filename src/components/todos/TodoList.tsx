"use client";

import { useState } from "react";

import Modal from "@/src/components/ui/Modal";
import { useTodos } from "@/src/hooks/useTodos";
import AddTodo from "./AddTodo";
import TodoEmptyState from "./TodoEmptyState";
import TodoFilters from "./TodoFilters";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoListError from "./TodoListError";
import TodoListSkeleton from "./TodoListSkeleton";
import { filterTodos, type Filter } from "./todo.utils";

export default function TodoList() {
  const { user, todos, isLoading, isError, error } = useTodos();
  const [filter, setFilter] = useState<Filter>("all");
  const [isAddOpen, setIsAddOpen] = useState(false);

  if (isLoading) return <TodoListSkeleton />;
  if (isError) return <TodoListError message={error?.message} />;

  const completedCount = todos.filter((t) => t.completed).length;
  const filteredTodos = filterTodos(todos, filter);
  const openAddModal = () => setIsAddOpen(true);

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <TodoHeader
        userName={user?.name ?? undefined}
        completedCount={completedCount}
        totalCount={todos.length}
        onAddClick={openAddModal}
      />

      <TodoFilters value={filter} onChange={setFilter} />

      {filteredTodos.length === 0 ? (
        <TodoEmptyState
          filter={filter}
          hasTodos={todos.length > 0}
          onAddClick={openAddModal}
        />
      ) : (
        <ul className="divide-y divide-gray-100">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}

      {isAddOpen && (
        <Modal title="Add a new task" onClose={() => setIsAddOpen(false)}>
          <AddTodo onSuccess={() => setIsAddOpen(false)} />
        </Modal>
      )}
    </section>
  );
}
