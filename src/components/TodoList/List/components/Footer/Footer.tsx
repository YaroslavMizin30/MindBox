import React, { FC, useState } from 'react';
import classNames from 'classnames/bind';

import Text from '@ui/Text/Text';

import Button from '../../ui/Button/Button';

import { FooterProps } from './Footer.props';

import styles from './Footer.local.css';

const cx = classNames.bind(styles);

enum ActiveButton {
  ACTIVE = 'active',
  ALL = 'all',
  COMPLETED = 'completed',
}

const Footer: FC<FooterProps> = (props) => {
  const { onItemsFilterClick, onClearButtonClick, itemsNumber = '' } = props;

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
        >
          <Text>All</Text>
        </Button>

        <Button
          onClick={handleActiveButtonClick}
          active={active === ActiveButton.ACTIVE}
        >
          <Text>Active</Text>
        </Button>

        <Button
          onClick={handleCompletedButtonClick}
          active={active === ActiveButton.COMPLETED}
        >
          <Text>Completed</Text>
        </Button>
      </div>

      <Button onClick={handleCompletedItemsDelete}>
        <Text>Clear completed</Text>
      </Button>
    </div>
  );
};

export default Footer;
