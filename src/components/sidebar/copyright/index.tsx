import React from 'react';
import styles from './index.module.scss';

interface CopyrightProps {
  copyright: string;
}

const Copyright: React.FC<CopyrightProps> = ({ copyright }) => (
  <div className={styles['copyright']}>{copyright}</div>
);

export default Copyright;
