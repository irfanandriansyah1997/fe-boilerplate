import { ChangeEventHandler } from 'react';

/**
 * Dog Input Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.31
 */
export interface IDogInputProps {
  dogName: string;
  onChangeDogName: ChangeEventHandler<HTMLInputElement>;
}
