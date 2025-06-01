import { TodoListItem } from '../../types';

export interface ItemProps extends TodoListItem {
  /**
   * Флаг, нужно ли показывать айтем
   */
  isVisible: boolean;
  /**
   * Колбэк на нажатие по марке.
   */
  onItemMark: (status: TodoListItem['status'], id: string) => void;
}
