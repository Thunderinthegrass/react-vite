import React from 'react';
import styles from "./ListItem.module.scss";

const ListItem = ({id, name}) => {
  return (
    <div>
      <p className={styles.listItem}>{id}. {name}</p>
    </div>
  )
}

export default ListItem