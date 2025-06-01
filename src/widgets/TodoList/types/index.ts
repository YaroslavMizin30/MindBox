
export const enum TodoStatus {
  /**
   * Не выполнено
   */
  Active = 'active',
  /**
   * Выполнено
   */
  Completed = 'completed',
}

export interface TodoListItem {
  /**
   * Флаг, если выполнено
   */
  status: `${TodoStatus}`;
  /**
   * Текст
   */
  children: string;
  /**
   * ID
   */
  id: string;
}

export type CurrentListItemsType = `${TodoStatus}` | 'all';
