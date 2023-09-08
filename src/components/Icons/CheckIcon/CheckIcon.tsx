import * as React from 'react';
import cn from 'classnames';

import { IconProps } from '../types';
import styles from '../Icon.module.scss';

const CheckIcon: React.FC<IconProps> = ({
  color,
  className,
  ...NativeProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={cn(
        styles.icon,
        color && styles[`icon_color-${color}`],
        className
      )}
      {...NativeProps}
    >
      <path
        d="M4 11.6129L9.87755 18L20 7"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default CheckIcon;
