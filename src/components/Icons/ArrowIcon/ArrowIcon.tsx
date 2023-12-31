import * as React from 'react';
import cn from 'classnames';

import { IconProps } from '../types';
import styles from '../Icon.module.scss';

const ArrowIcon: React.FC<IconProps> = ({
  color,
  className,
  ...NativeProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={cn(
        styles.icon,
        color && styles[`icon_color-${color}`],
        className
      )}
      {...NativeProps}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          styles.icon,
          color && styles[`icon_color-${color}`],
          className
        )}
        {...NativeProps}
      >
        <path
          d="M20.12 26.5599L11.4267 17.8666C10.4 16.8399 10.4 15.1599 11.4267 14.1333L20.12 5.43994"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

export default ArrowIcon;
