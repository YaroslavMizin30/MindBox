import React, { FC } from 'react';
import classNames from 'classnames/bind';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import styles from './List.local.css';

const cx = classNames.bind(styles);


import Stack from '@ui/Stack/Stack';

export const List = () => {
  

  return (
    <Stack className={cx('list')}>
      <Header></Header>
      <Footer></Footer>
    </Stack>
  );
};
