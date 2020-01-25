// @flow strict
import React from 'react';
import styles from './contacts.module.scss';

type Props = {
  contacts: {
    [string]: string,
  },
};

const Contacts = ({ contacts }: Props) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name) => (!contacts[name] ? null : (
        <li className={styles['contacts__list-item']} key={name}>
          <a
            className={styles['contacts__list-item-link']}
            rel="noopener noreferrer"
            target="_blank"
          >
          </a>
        </li>
      )))}
    </ul>
  </div>
);

export default Contacts;
