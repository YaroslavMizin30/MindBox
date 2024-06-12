import { TodoListItem } from "@components/TodoList";

export interface HeaderProps {
  /**
   * Колбэк на добавление
   */
  onItemAdd: (item: TodoListItem) => void;
}
