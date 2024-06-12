import React, { useState } from 'react';

import {
  TodoListItem,
  TodoStatus,
  CurrentListItemsType,
} from '@components/TodoList';

import { UseListResult } from './useList.types';

const useList = (): UseListResult => {
  const [items, setItems] = useState<TodoListItem[]>([]);

  const [currentItems, setCurrentItems] = useState<CurrentListItemsType>('all');

  const addItem = (item: TodoListItem) => {
    setItems([item, ...items]);
  };

  const markItem = (status: `${TodoStatus}`, id: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: status };
      }

      return item;
    });

    setItems(newItems);
  };

  const filterItems = (status: `${TodoStatus}`) => {
    const newItems = items.filter((item) => item.status !== status);

    setItems(newItems);
  };

  const getCurrentItems = (status: CurrentListItemsType) => {
    setCurrentItems(status);
  };

  return {
    items: items || [],
    currentItems,
    addItem,
    markItem,
    filterItems,
    getCurrentItems,
  };
};

export default useList;
