import React from 'react';
import Author from './author';
import Contacts from './contacts';
import Copyright from './copyright';
import Menu from './menu';
import styles from './index.module.scss';
import useSiteMetadata from 'src/shared/query/site-metadata';

interface SidebarProps {
  isIndex?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
