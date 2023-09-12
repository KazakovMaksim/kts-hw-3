import React from 'react';
import cn from 'classnames';

import Text from 'components/Text';
import Loader from 'components/Loader';
import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  className,
  ...nativeProps
}) => {
  return (
    <button
      type="button"
      {...nativeProps}
      disabled={disabled || loading}
      className={cn(
        className,
        styles.button,
        disabled && styles.button_disabled
      )}
    >
      {loading && <Loader size="s" className={styles.button_loader} />}
      <Text className="button_text">{children}</Text>
    </button>
  );
};

export default Button;
