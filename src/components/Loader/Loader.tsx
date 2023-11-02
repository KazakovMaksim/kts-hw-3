import React from 'react';
import cn from 'classnames';

import styles from './Loader.module.scss';

export type LoaderProps = {
  size?: 's' | 'm' | 'l';
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ size, className }) => (
  <div
    className={cn(
      styles.container,
      size ? styles[`size_${size}`] : styles.size_l,
      className
    )}
  >
    <div
      className={cn(styles.border, styles[`${size}`] || styles.l, className)}
    />
  </div>
);

export default Loader;
