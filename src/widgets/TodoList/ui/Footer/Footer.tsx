import React, { FC, memo, useState } from 'react';
import classNames from 'classnames/bind';

import { Text, Button } from '@shared/ui';

import { FooterProps } from './Footer.props';

import styles from './Footer.local.css';

const cx = classNames.bind(styles);

const enum ActiveButton {
  ACTIVE = 'active',
  ALL = 'all',
  COMPLETED = 'completed',
}

const Footer: FC<FooterProps> = memo((props) => {
  const {
    onItemsFilterClick,
    onClearButtonClick,
    itemsNumber = '',
    hasCompletedTasks = false,
  } = props;

  const [active, setActive] = useState<`${ActiveButton}`>(ActiveButton.ALL);

  const handleAllButtonClick = () => {
    onItemsFilterClick('all');

    if (active !== ActiveButton.ALL) {
      setActive(ActiveButton.ALL);
    }
  };

  const handleActiveButtonClick = () => {
    onItemsFilterClick('active');

    if (active !== ActiveButton.ACTIVE) {
      setActive(ActiveButton.ACTIVE);
    }
  };

  const handleCompletedButtonClick = () => {
    onItemsFilterClick('completed');

    if (active !== ActiveButton.COMPLETED) {
      setActive(ActiveButton.COMPLETED);
    }
  };

  const handleCompletedItemsDelete = () => {
    onClearButtonClick('completed');
  };

  return (
    <div className={cx('footer')}>
      <Text>{`${itemsNumber} items left`}</Text>

      <div className={cx('tabs')}>
        <Button
          onClick={handleAllButtonClick}
          active={active === ActiveButton.ALL}
          testId={'show-all'}
        >
          <Text>All</Text>
        </Button>

        <Button
          onClick={handleActiveButtonClick}
          active={active === ActiveButton.ACTIVE}
          testId={'show-active'}
        >
          <Text>Active</Text>
        </Button>

        <Button
          onClick={handleCompletedButtonClick}
          active={active === ActiveButton.COMPLETED}
          testId={'show-completed'}
        >
          <Text>Completed</Text>
        </Button>
      </div>

      <Button
        onClick={handleCompletedItemsDelete}
        isDisabled={!hasCompletedTasks}
        testId={'clear-completed'}
      >
        <Text>Clear completed</Text>
      </Button>
    </div>
  );
});

export default Footer;
