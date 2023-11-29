import React from 'react'
import styles from "./personalInfo.module.scss"
const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className={styles.form}>
        <div className={styles.formControl}>
            <label>Name</label>
            <input type='text' placeholder='e.g. Stephen King'/>
        </div>
        <div className={styles.formControl}>
            <label>Email Address</label>
            <input type='email' placeholder='e.g. stephrnking@lorem.com'/>
        </div>
        <div className={styles.formControl}>
            <label>Phone Number</label>
            <input type='text' placeholder='e.g. +1 234 567 897'/>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo;
