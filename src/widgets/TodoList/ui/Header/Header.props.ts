import { TodoListItem } from '../../types';

export interface HeaderProps {
  /**
   * Колбэк на добавление
   */
  onItemAdd: (item: TodoListItem) => void;
  /**
   * Колбэк на сворачивание листа
   */
  onListCollapse: () => void;
  /**
   * Флаг, свернут ли сейчас лист
   */
  isCollapsed?: boolean;
}
