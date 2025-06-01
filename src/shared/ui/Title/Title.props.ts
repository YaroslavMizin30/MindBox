export interface TitleProps {
  /**
   * Размер заголовка
   */
  size: 'l';
  /**
   * Цвет
   */
  theme?: 'primary' | 'secondary';
  /**
   * Содержимое
   */
  children: string | React.ReactNode;
  /**
   * Тип
   */
  type: 'p' | 'h1';
  /**
   * Кастомный класс
   */
  className?: string;
  /**
   * ID для тестов
   */
  testId?: string;
}
