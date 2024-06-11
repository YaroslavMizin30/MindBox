import React, { memo, FC } from 'react';
import classNames from 'classnames/bind';

import Title from '@ui/Title/Title';

import { ItemProps } from './Item.props';

import styles from './Items.local.css';

const cx = classNames.bind(styles);

const Item: FC<ItemProps> = memo(
  (props) => {
    const { isCompleted, children } = props;

    return (
      <div className={cx('item')}>
        <div className={cx('item-state', {
          ['item-state--completed']: isCompleted,
        })}>
          <div
            className={cx({
              ['tick-mark']: isCompleted,
            })}
          ></div>
        </div>

        <Title
          type="p"
          size="l"
          className={cx('title', {
            ['title--completed']: isCompleted,
          })}
        >
          {children}
        </Title>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.isCompleted !== nextProps.isCompleted;
  }
);

export default Item;
