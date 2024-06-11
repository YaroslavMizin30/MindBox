export interface TitleProps {
  /**
   * Размер заголовка
   */
  size: 'm' | 'l' | 'xxl';
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
}
