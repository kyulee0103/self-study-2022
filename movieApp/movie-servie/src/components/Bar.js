/** @format */

import styles from "../CSS/Bar.module.css";
/** @format */

function Bar() {
  return (
    <div className={styles.box}>
      <div className={styles.right}>
        <p className={styles.title}>NETFLIX</p>
        <div className={styles.tab}>
          <p className={styles.tabbtn}>home</p>
          <p className={styles.tabbtn}>series</p>
          <p className={styles.tabbtn}>NEW!</p>
        </div>
      </div>
      <div className={styles.left}>
        <button className={styles.btn}>login</button>
      </div>
    </div>
  );
}

export default Bar;
