import React from 'react';
import styles from './index.module.scss';

interface IconProps {
  name: string;
  icon: {
    viewBox?: string;
    path?: string;
  };
}

const Icon: React.FC<IconProps> = ({ name, icon }) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
