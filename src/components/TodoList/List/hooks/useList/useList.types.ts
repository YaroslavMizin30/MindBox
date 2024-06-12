import { TodoListItem, TodoStatus, CurrentListItemsType } from '@components/TodoList';

export interface UseListResult {
  /**
   *
   */
  items: TodoListItem[];
  /**
   *
   */
  markItem: (status: `${TodoStatus}`, id: string) => void;
  /**
   *
   */
  addItem: (item: TodoListItem) => void;
  /**
   * Текущий статус видимых задач
   */
  currentItems: CurrentListItemsType;
  /**
   *
   */
  getCurrentItems: (status: CurrentListItemsType) => void;
  /**
   * 
   */
  filterItems: (status: `${TodoStatus}`) => void;
}
