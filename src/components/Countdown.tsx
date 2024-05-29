import React from 'react'
import { useState, useEffect } from 'react';
import styles from './styles/countdown.module.css'

export interface CountdownProps {
  title: string;
  date: string;
}

const calculateTimeLeft = (date: string) => {
  const difference = +new Date(date) - +new Date()
  let timeLeft: any = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

function Countdown(props: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.date));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.date));
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        <h1 className={styles.title}>{ props.title }</h1>
        <div>
          <span className={styles.text} suppressHydrationWarning>
            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, and {timeLeft.seconds} seconds left
          </span>
        </div>
      </div>
    </div>
  )
}

export default Countdown