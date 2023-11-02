import React from 'react';
import Text from 'components/Text';
import styles from './CategoriesPage.module.scss';

const CategoriesPage = () => {
  return (
    <main className={styles.categories}>
      <Text view="title">Categories</Text>
    </main>
  );
};

export default CategoriesPage;
