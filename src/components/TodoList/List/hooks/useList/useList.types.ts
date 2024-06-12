import { TodoListItem, TodoStatus, CurrentListItemsType } from '@components/TodoList';

export interface UseListResult {
  /**
   * Список
   */
  items: TodoListItem[];
  /**
   * Метод обновления статуса
   */
  markItem: (status: `${TodoStatus}`, id: string) => void;
  /**
   * Метод добавления
   */
  addItem: (item: TodoListItem) => void;
  /**
   * Текущий статус видимых задач
   */
  currentItems: CurrentListItemsType;
  /**
   * Метод фильтрации по текущему статусу.
   */
  getCurrentItems: (status: CurrentListItemsType) => void;
  /**
   * Метод безвозвратной фильтрации списка
   */
  filterItems: (status: `${TodoStatus}`) => void;
}
