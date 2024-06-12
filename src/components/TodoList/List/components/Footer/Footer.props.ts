import { TodoStatus, CurrentListItemsType } from '@components/TodoList';

export interface FooterProps {
  /**
   * Колбэк на показ активных
   */
  onItemsFilterClick: (status: CurrentListItemsType) => void;
  /**
   * Колбэк на клик по кнопке очистки
   * выполненных
   */
  onClearButtonClick: (status: `${TodoStatus}`) => void;
  /**
   * Количество задач
   */
  itemsNumber: number;
}
