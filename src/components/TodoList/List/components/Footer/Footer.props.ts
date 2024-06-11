export interface FooterProps {
  /**
   * Колбэк на показ активных
   */
  onActiveButtonClick: () => void;
  /**
   * Колбэк на показ всех
   */
  onAllButtonClick: () => void;
  /**
   * Колбэк на показ выполненных
   */
  onCompletedButtonClick: () => void;
  /**
   * Колбэк на клик по кнопке очистки
   */
  onClearButtonClick: () => void;
  /**
   * Количество задач
   */
  itemsNumber: number;
}
