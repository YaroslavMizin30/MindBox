import React, { FC, useCallback, useState } from 'react';
import classNames from 'classnames/bind';

import { Stack } from '@shared/ui';

import { TodoListItem, CurrentListItemsType, TodoStatus } from '../../types';

import useList from '../../model/useList/useList';

import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Item from '../Item/Item';

import styles from './List.local.css';

const cx = classNames.bind(styles);

export const List = () => {
  const {
    items = [],
    currentStatus,
    addItem,
    markItem,
    getCurrentItems,
    filterItems,
    itemsCount,
  } = useList();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleItemAdd = (item: TodoListItem) => {
    addItem(item);
  };

  const handleListCollapse = () => {
    if (items.length) {
      setIsCollapsed(!isCollapsed);
    }
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

  const completedItems = items.filter((item) => {
    const { status } = item;

    return status === 'completed';
  });

  return (
    <Stack className={cx('list')}>
      <Header
        onItemAdd={handleItemAdd}
        onListCollapse={handleListCollapse}
        isCollapsed={isCollapsed}
      />

      <Body isCollapsed={isCollapsed}>
        {items.map((item) => {
          const { children, status, id } = item;

          return (
            <Item
              status={status}
              onItemMark={handleItemMark}
              key={id}
              id={id}
              isVisible={
                currentStatus === 'all' || item.status === currentStatus
              }
              data-testid={`item`}
            >
              {children}
            </Item>
          );
        })}
      </Body>

      <Footer
        itemsNumber={itemsCount}
        onClearButtonClick={handleItemsClear}
        onItemsFilterClick={handleItemsFilter}
        hasCompletedTasks={Boolean(completedItems.length)}
      />
    </Stack>
  );
};
