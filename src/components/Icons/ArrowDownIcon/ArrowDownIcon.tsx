import * as React from 'react';
import cn from 'classnames';

import { IconProps } from '../types';
import styles from '../Icon.module.scss';

const ArrowDownIcon: React.FC<IconProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDownIcon;
