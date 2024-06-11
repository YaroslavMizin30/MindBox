import React, { FC } from 'react';
import classNames from 'classnames/bind';

import Stack from '@ui/Stack/Stack';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Item from './components/Item/Item';

import styles from './List.local.css';

const cx = classNames.bind(styles);

export const List = () => {
  const items = [
    { isCompleted: true, title: 'Сделать тестовое задание' },
    { isCompleted: false, title: 'Покрытие тестами' },
  ];

  return (
    <Stack className={cx('list')}>
      <Header></Header>
      <div className={cx('body')}>
        {items.map((item) => {
          const { title, isCompleted } = item;

          return <Item isCompleted={isCompleted}>{title}</Item>;
        })}
      </div>
      <Footer></Footer>
    </Stack>
  );
};
