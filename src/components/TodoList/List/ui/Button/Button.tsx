import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { ButtonProps } from './Button.props';

import styles from './Button.local.css';

const cx = classNames.bind(styles);

const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, active } = props;

  return (
    <button
      className={cx('button', {
        ['button--active']: active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
