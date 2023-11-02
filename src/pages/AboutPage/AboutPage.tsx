import React from 'react';
import Text from 'components/Text';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <main className={styles.about}>
      <Text view="title">About us</Text>
    </main>
  );
};

export default AboutPage;
