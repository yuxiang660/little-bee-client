import React from 'react';
import moment from 'moment';
import styles from './index.module.scss';

interface MetaProps {
  date: string;
}

const Meta: React.FC<MetaProps> = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {moment(date).format('D MMM YYYY')}</p>
  </div>
);

export default Meta;
