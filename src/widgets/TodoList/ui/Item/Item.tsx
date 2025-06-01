import React, { memo, FC } from 'react';
import classNames from 'classnames/bind';

import Title from '@shared/ui/Title/Title';

import { TodoStatus } from '../../types';

import { ItemProps } from './Item.props';

import styles from './Items.local.css';

const cx = classNames.bind(styles);

const Item: FC<ItemProps> = memo((props) => {
  const { status, children, onItemMark, id, isVisible } = props;

  const handleItemMarkClick = () => {
    const newStatus = status === 'active' ? 'completed' : 'active';

    onItemMark(newStatus, id);
  };

  return (
    <div
      className={cx('item', { hidden: !isVisible })}
      data-testid={`item-${status}`}
    >
      <div
        onClick={handleItemMarkClick}
        className={cx('item-state', {
          ['item-state--completed']: status === TodoStatus.Completed,
        })}
        data-testid={`item-mark-${status}`}
      >
        <div
          className={cx({
            ['tick-mark']: status === TodoStatus.Completed,
          })}
        />
      </div>

      <Title
        type="p"
        size="l"
        className={cx('title', {
          ['title--completed']: status === TodoStatus.Completed,
        })}
        testId={`${isVisible ? 'item-visible' : ''}`}
      >
        {children}
      </Title>
    </div>
  );
});

export default Item;
