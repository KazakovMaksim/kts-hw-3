import React from 'react';

import styles from './Wrapper.module.scss';

export type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
