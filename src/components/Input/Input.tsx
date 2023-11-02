import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  value: string;
  onChange: (value: string) => void;
  afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { value, afterSlot, className, disabled, onChange, ...nativeProps },
    ref
  ) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <label
        htmlFor="search"
        className={cn(
          className,
          styles.input_container,
          disabled && styles.input_container__disabled
        )}
      >
        <input
          id="search"
          ref={ref}
          type="text"
          className={styles.input}
          disabled={disabled}
          value={value}
          onChange={changeHandler}
          {...nativeProps}
        />
        {!!afterSlot && <div className={styles.input_after}>{afterSlot}</div>}
      </label>
    );
  }
);

export default Input;
