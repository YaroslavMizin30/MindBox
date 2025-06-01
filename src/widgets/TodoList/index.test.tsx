import '@testing-library/jest-dom';

import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { List } from './ui/List/List';

const addTask = (formInput: HTMLElement, newTaskForm: HTMLElement) => {
  fireEvent.input(formInput, { target: { value: Math.random() } });

  fireEvent.submit(newTaskForm);
};

const addTasks = (
  formInput: HTMLElement,
  newTaskForm: HTMLElement,
  count: number
) => {
  for (let i = 0; i < count; i++) {
    addTask(formInput, newTaskForm);
  }
};

const markItem = (itemsMarks: HTMLElement[], index: number) => {
  fireEvent.click(itemsMarks[index]);
};

const setup = () => {
  const { getByTestId, queryAllByTestId } = render(<List />);

  const newTaskForm = getByTestId('form');
  const formInput = getByTestId('form-input');
  const showAllButton = getByTestId('show-all');
  const showActiveButton = getByTestId('show-active');
  const showCompletedButton = getByTestId('show-completed');
  const clearCompletedButton = getByTestId('clear-completed');

  return {
    newTaskForm,
    formInput,
    showAllButton,
    showActiveButton,
    showCompletedButton,
    clearCompletedButton,
    queryAllByTestId,
  };
};

describe(List, () => {
  it('items are rendered correctly', () => {
    const { formInput, newTaskForm, queryAllByTestId } = setup();

    // Добавляем 10 тасок
    addTasks(formInput, newTaskForm, 10);

    const items = queryAllByTestId('item-active');

    // Смотрим, что присутствуют ровно 10
    expect(items.length).toBe(10);
  });

  it('items are filtered correctly', () => {
    const {
      formInput,
      newTaskForm,
      queryAllByTestId,
      showAllButton,
      showActiveButton,
      showCompletedButton,
      clearCompletedButton,
    } = setup();

    addTasks(formInput, newTaskForm, 10);

    let items = queryAllByTestId('item-mark-active');

    // Маркировка 3 штук как выполненных
    markItem(items, 3);
    markItem(items, 4);
    markItem(items, 8);

    const completedItems = queryAllByTestId('item-completed');

    // 3 штуки в списке помечены галочкой
    expect(completedItems.length).toBe(3);

    // Смотрим только активные
    fireEvent.click(showActiveButton);

    let visibleItems = queryAllByTestId('item-visible');

    // Должно остаться 7 из 10 в вкладке
    expect(visibleItems.length).toBe(7);

    // Смотрим только завершенные
    fireEvent.click(showCompletedButton);

    visibleItems = queryAllByTestId('item-visible');

    // Должно быть 3, которые нажаты ранее
    expect(visibleItems.length).toBe(3);

    // Очищаем выполненные кнопкой
    fireEvent.click(clearCompletedButton);

    visibleItems = queryAllByTestId('item-visible');

    // Вкладка остается пустой
    expect(visibleItems.length).toBe(0);

    // Переключаем на все задачи
    fireEvent.click(showAllButton);

    visibleItems = queryAllByTestId('item-visible');

    // Должно быть 7 штук активных
    expect(visibleItems.length).toBe(7);

    items = queryAllByTestId('item-mark-active');

    // Помечаем еще раз 3 активных как выполненные
    markItem(visibleItems, 0);
    markItem(visibleItems, 2);
    markItem(visibleItems, 4);

    visibleItems = queryAllByTestId('item-visible');

    // В списке по-прежнему 7 тасок, только некоторые
    // отмечены галочкой
    expect(visibleItems.length).toBe(7);
  });
});
