import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { TextProps } from './Text.props';

import styles from './Text.local.css';

const cx = classNames.bind(styles);

const Text: FC<TextProps> = (props) => {
  const { theme = 'primary', children } = props;

  return <span className={cx('text', theme)}>{children}</span>;
};

export default Text;
