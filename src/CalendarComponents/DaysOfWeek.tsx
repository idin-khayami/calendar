import React from 'react'
import styles from './style.module.css';

class DaysOfWeek extends React.Component<any, any>{

    render(){
      return(
        <div className={styles['calendarDay']}>
                <div className={styles['dayHeader']}>شنبه</div>
                <div className={styles['dayHeader']}>یکشنبه</div>
                <div className={styles['dayHeader']}>دوشنبه</div>
                <div className={styles['dayHeader']}>سه‌شنبه</div>
                <div className={styles['dayHeader']}>چهارشنبه</div>
                <div className={styles['dayHeader']}>پنج‌شنبه</div>
                <div className={styles['dayHeader']}>جمعه</div>
            </div>
    )
    }
  }

  export default DaysOfWeek
