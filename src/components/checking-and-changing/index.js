import React from "react";
import styles from "./checkingBeforeFinish.module.scss";
const CheckingAndChange = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div>
        <div>plan</div>
        <span>Change</span>
      </div>
    </div>
  );
};

export default CheckingAndChange;
