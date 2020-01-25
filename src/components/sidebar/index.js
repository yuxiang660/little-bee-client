// @flow strict
import React from 'react';
import Author from './author';
import Contacts from './contacts';
import Copyright from './copyright';
import Menu from './menu';
import styles from './sidebar.module.scss';
import useSiteMetadata from '../../query/site-metadata';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
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
