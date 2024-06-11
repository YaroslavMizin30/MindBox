import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { TitleProps } from './Title.props';

import styles from './Title.local.css';

const cx = classNames.bind(styles);

const Title: FC<TitleProps> = (props) => {
  const {
    type = 'p',
    size = 'm',
    theme = 'primary',
    children,
    className = '',
  } = props;

  const titleClassName = `${cx('title', `title--${size}`, theme)} ${className}`;

  switch (type) {
    case 'h1':
      return <h1 className={titleClassName}>{children}</h1>;
    default:
      return <p className={titleClassName}>{children}</p>;
  }
};

export default Title;
