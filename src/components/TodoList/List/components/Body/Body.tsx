import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BodyProps } from './Body.props';

import styles from './Body.local.css';

const cx = classNames.bind(styles);

const Body: FC<BodyProps> = (props) => {
  const { children } = props;

  return <div className={cx('body')}>{children}</div>;
};

export default Body;
