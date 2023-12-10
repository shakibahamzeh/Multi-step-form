import React from 'react'
import Image from 'next/image';
import styles from "./confirming.module.scss"
const Confirming: React.FC = () => {
  return (
    <div className={styles.container}>
        <div>
           <Image src="/icon-thank-you.svg" alt="check" width={100} height={100}/>
        </div>
        <div>
            <h2>Thank you!</h2>
            <p>
                Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.
            </p>
        </div>
    </div>
  )
}

export default Confirming;