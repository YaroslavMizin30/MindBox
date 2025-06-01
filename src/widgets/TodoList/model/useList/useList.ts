import React, { useState } from 'react';

import { TodoListItem, TodoStatus, CurrentListItemsType } from '../../types';

import { UseListResult } from './useList.types';

const useList = (): UseListResult => {
  const [items, setItems] = useState<TodoListItem[]>([]);

  const [currentStatus, setCurrentStatus] =
    useState<CurrentListItemsType>('all');

  /**
   * Тут можно обойтись без useMemo, с учетом,
   * что ToDo лист на миллионы или тысячи задач - штука маловероятная
   */
  const itemsCount = (() => {
    if (currentStatus === 'all') {
      return items.length;
    }

    return items.filter((item) => {
      const { status } = item;

      return status === currentStatus;
    }).length;
  })();

  const addItem = (item: TodoListItem) => {
    /**
     * Добавлять в начало или в конец в ТЗ не нашел,
     * так что добавим в начало
     */
    setItems([item, ...items]);
  };

  const markItem = (status: `${TodoStatus}`, id: string) => {
    const newItems = items.map((item) => {
      const { id: itemId } = item;

      if (itemId === id) {
        return { ...item, status: status };
      }

      return item;
    });

    setItems(newItems);
  };

  const filterItems = (status: `${TodoStatus}`) => {
    const newItems = items.filter((item) => item.status !== status);

    if (newItems.length !== items.length) {
      setItems(newItems);
    }
  };

  const getCurrentItems = (status: CurrentListItemsType) => {
    setCurrentStatus(status);
  };

  return {
    items,
    currentStatus,
    itemsCount,
    addItem,
    markItem,
    filterItems,
    getCurrentItems,
  };
};

export default useList;
