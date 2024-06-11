import React from 'react';
import classNames from 'classnames/bind';

import Title from '@ui/Title/Title';

import styles from './Header.local.css';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('arrow-down')}></div>

      <input
        type="text"
        placeholder="What needs to be done?"
        className={cx('input')}
      />
    </div>
  );
};

export default Header;
