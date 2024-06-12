import React, { FC, useCallback } from 'react';
import classNames from 'classnames/bind';

import Stack from '@ui/Stack/Stack';

import { TodoListItem, CurrentListItemsType, TodoStatus } from '..';

import useList from './hooks/useList/useList';

import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Item from './components/Item/Item';

import styles from './List.local.css';

const cx = classNames.bind(styles);

export const List = () => {
  const {
    items = [],
    currentItems,
    addItem,
    markItem,
    getCurrentItems,
    filterItems,
  } = useList();

  const handleItemAdd = (item: TodoListItem) => {
    addItem(item);
  };

  const handleItemMark = useCallback(
    (status: TodoListItem['status'], id: string) => {
      markItem(status, id);
    },
    [items]
  );

  const handleItemsFilter = (status: CurrentListItemsType) => {
    getCurrentItems(status);
  };

  const handleItemsClear = (status: `${TodoStatus}`) => {
    filterItems(status);
  };

  const filteredItems = items.filter((item) => item.status === currentItems);

  const currentNumber = currentItems === 'all' && items.length || filteredItems.length;

  return (
    <Stack className={cx('list')}>
      <Header onItemAdd={handleItemAdd}></Header>

      <Body>
        {items.map((item) => {
          const { children, status, id } = item;

          const isVisible = currentItems === status || currentItems === 'all';

          return (
            <Item
              status={status}
              isVisible={isVisible}
              onItemMark={handleItemMark}
              key={id}
              id={id}
            >
              {children}
            </Item>
          );
        })}
      </Body>

      <Footer
        itemsNumber={currentNumber}
        onClearButtonClick={handleItemsClear}
        onItemsFilterClick={handleItemsFilter}
      />
    </Stack>
  );
};
