export interface ButtonProps {
  /**
   * Флаг, активна ли кнопка.
   */
  active?: boolean;
  /**
   * Текст кнопки
   */
  children: string | React.ReactNode;
  /**
   * Колбэк на клик
   */
  onClick: () => void;
}
