import React, { FC } from 'react';
import classNames from 'classnames/bind';

import { BodyProps } from './Body.props';

import styles from './Body.local.css';

const cx = classNames.bind(styles);

const Body: FC<BodyProps> = (props) => {
  const { children, className, isCollapsed } = props;

  return (
    <div className={cx('body-wrapper')}>
      <div
        className={cx('body', { ['body--collapsed']: isCollapsed }, className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Body;
