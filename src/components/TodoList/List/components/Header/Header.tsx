import React from 'react';
import classNames from 'classnames/bind';

import Title from '@ui/Title/Title';

import styles from './Header.local.css';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('arrow-down')}></div>

      <Title size="l" type="h1" className={cx('title')}>
        What needs to be done?
      </Title>
    </div>
  );
};

export default Header;
