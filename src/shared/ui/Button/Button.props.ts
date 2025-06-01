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
  /**
   * Флаг, заблокирована ли кнопка
   */
  isDisabled?: boolean;
  /**
   * ID для тестов
   */
  testId?: string;
}
