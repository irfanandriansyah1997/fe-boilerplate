/* eslint-disable jsx-a11y/label-has-associated-control */
import { verifiedIsNotEmpty } from '@99/helper';
import { FC, memo } from 'react';

import style from './style/style.module.scss';
import { IDogInputProps } from './interface';

/**
 * Dog Name Input Component
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
const DogNameInput: FC<IDogInputProps> = ({ dogName, onChangeDogName }) => (
  <form onSubmit={(e) => e.preventDefault()} className={style.form}>
    <div className={style[`dog-form`]}>
      <label htmlFor="dogName">Dog Name</label>
      <input
        value={dogName}
        onChange={onChangeDogName}
        id="dogName"
        placeholder="Input Your Dog Name"
        autoComplete="off"
      />
    </div>
    {verifiedIsNotEmpty(dogName) && (
      <div className={style[`dog-form__text`]}>
        this is your dog name: <strong>{dogName}</strong>
      </div>
    )}
  </form>
);

export default memo(DogNameInput);
