import React, { useState } from 'react'
import styles from "./selectPlan.module.scss";
import Image from 'next/image';
import { Toggle } from 'rsuite';
const SelectPlan = () => {
    const planDataMonthly = [
        {id:0,title:"Arcade",icon:"/icon-arcade.svg",price:9},
        {id:1,title:"Advanced",icon:"/icon-advanced.svg",price:12},
        {id:2,title:"Pro",icon:"/icon-pro.svg",price:15}
    ];
    const planDataYearly = [
        {id:0,title:"Arcade",icon:"/icon-arcade.svg",price:90},
        {id:1,title:"Advanced",icon:"/icon-advanced.svg",price:120},
        {id:2,title:"Pro",icon:"/icon-pro.svg",price:150}
    ];
    const [time, setTime] = useState('yearly')
    const [isChecked , setIsChecked] = useState('monthly');
    const handleChange = () => {
      if(isChecked === 'monthly'){
        setIsChecked('yearly')
        setTime('yearly')
      }else{
        setIsChecked('monthly');
        setTime('monthly')
      }
    }
  return (
    <div className={styles.container}>
    <div>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
    </div>
    <div>
        <div className={styles.cards}>
            {
                time === 'yearly' ?    
                <>
                {
                    planDataYearly.map((item) => <div key={item.id} className={styles.card}>
                      <Image src={item.icon} width={50} height={50} alt=""/>
                      <h3>{item.title}</h3>
                      <span>${item.price}/yr</span>
                      <p>2 month free</p>
                    </div>
                    )
                }
                </>
                :
                <>
                {
                    planDataMonthly.map((item) => <div key={item.id} className={styles.card}>
                      <Image src={item.icon} width={50} height={50} alt=""/>
                      <h3>{item.title}</h3>
                      <span>${item.price}/mo</span>
                    </div>
                    )
                }
                </>
            }
         
        </div>
        <div className={styles.toggle}>
        <div className={isChecked === 'monthly' ? styles.active : styles.toggleTitle}>monthly</div>
        <label className={styles.switch}>
          
        <input type="checkbox" value={isChecked} onChange={handleChange} />
        <div className={styles.slider}></div>
        

      </label>
      <div className={isChecked === 'yearly' ? styles.active : styles.toggleTitle}>yearly</div>
        </div>
    </div>
  </div>
  )
}

export default SelectPlan;