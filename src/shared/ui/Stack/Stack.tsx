import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { StackProps } from './Stack.props';

import styles from './Stack.local.css';

const cx = classNames.bind(styles);

const Stack: FC<StackProps> = (props) => {
  const { children, className = '' } = props;

  return <div className={`${cx('stack')} ${className}`}>{children}</div>;
};

export default Stack;
