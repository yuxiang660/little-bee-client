// @flow strict
import React from 'react';
import styles from './copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    {copyright}
  </div>
);

export default Copyright;
