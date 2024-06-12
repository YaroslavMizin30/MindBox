import React, { FC, FormEvent, SyntheticEvent, useId, useState } from 'react';
import classNames from 'classnames/bind';

import { HeaderProps } from './Header.props';

import styles from './Header.local.css';

const cx = classNames.bind(styles);

const Header: FC<HeaderProps> = (props) => {
  const { onItemAdd } = props;

  const [value, setValue] = useState<string>('');

  const id = useId() + Math.random() * 100;

  const handleTodoFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value) {
      onItemAdd({ children: value, id, status: 'active' });

      setValue('');
    }
  };

  const handleInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className={cx('header')}>
      <div className={cx('arrow-down')}></div>

      <form className={cx('form')} onSubmit={handleTodoFormSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className={cx('input')}
          onInput={handleInputChange}
          value={value}
        />
      </form>
    </div>
  );
};

export default Header;
