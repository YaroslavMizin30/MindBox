import React, { memo, FC } from 'react';
import classNames from 'classnames/bind';

import Title from '@ui/Title/Title';

import { TodoStatus } from '@components/TodoList';

import { ItemProps } from './Item.props';

import styles from './Items.local.css';

const cx = classNames.bind(styles);

const Item: FC<ItemProps> = memo((props) => {
  const { status, children, isVisible, onItemMark, id } = props;

  const handleItemMarkClick = () => {
    const newStatus = status === 'active' ? 'completed' : 'active';

    onItemMark(newStatus, id);
  };

  if (isVisible) {
    return (
      <div className={cx('item')}>
        <div
          onClick={handleItemMarkClick}
          className={cx('item-state', {
            ['item-state--completed']: status === TodoStatus.Completed,
          })}
        >
          <div
            className={cx({
              ['tick-mark']: status === TodoStatus.Completed,
            })}
          ></div>
        </div>

        <Title
          type="p"
          size="l"
          className={cx('title', {
            ['title--completed']: status === TodoStatus.Completed,
          })}
        >
          {children}
        </Title>
      </div>
    );
  }

  return null;
});

export default Item;
