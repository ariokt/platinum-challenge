import React, { useState,useRef, useEffect } from 'react'
import './index.css'

function Timer(props) {
    // const {timerHour , timerMinuter, timerSecond, timerType} = props;
    const {timerType} = props;

    // const timerType = true      // true == day _ false == minutes
    const [timerHours, setTimerHour] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {
      const countDownDate = new Date('September 10, 2022 00:00:00').getTime();

      interval = setInterval(()=> {
        const now = new Date().getTime()
        const distance = countDownDate - now;

        const hours = Math.floor(distance % (1000*60 * 60* 24) / (1000 * 60 * 60 ));
        const minutes = Math.floor(distance % (1000*60 * 60) / (1000 * 60 ));
        const seconds = Math.floor(distance % (1000*60 ) / (1000 ));


        if(distance < 0){
          //stop 
          clearInterval(interval.current)
        } else{

          if(hours < 10) {
            setTimerHour(`0${hours}`)
          } else {
            setTimerHour(hours);
          }
          if(minutes < 10) {
            setTimerMinutes(`0${minutes}`)
          } else {
            setTimerMinutes(minutes)
          }
          if(seconds < 10) {
            setTimerSeconds(`0${seconds}`)
          } else {
            setTimerSeconds(seconds)
          }
        }

      }, 1000)
    }

    useEffect(()=> {
      startTimer();
      return () => {
        clearInterval(interval.current)
      }
    }, )

    const dayLay = () => {
      return  <div className='timer-section'>
        <div className='timer'>
          <p>{timerHours}</p>
        </div>
        <p>:</p>
        <div className='timer'>
          <p>{timerMinutes}</p>
        </div>
        <p>:</p>
        <div className='timer'>
          <p>{timerSeconds}</p>
        </div>
    </div>
    }
    
    const tenLay = () => {
      return <div className='timer-section'>
        <div className='timer'>
          <p>{timerMinutes}</p>
        </div>
        <p>:</p>
        <div className='timer'>
          <p>{timerSeconds}</p>
        </div>
      </div>
    }
  
  return (
    <div>{timerType ? dayLay() : tenLay()}</div>
  )
}

export default Timer
