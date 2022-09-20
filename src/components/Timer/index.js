import React, { useState,useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './index.css'

function Timer({ timerType, setDateLimit, setPesananBerhasil, pesananBerhasil }) {
    const [timerHours, setTimerHour] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const timerPembayaran = window.sessionStorage.getItem("TimerPembayaran");

    let interval = useRef();
    const navigate = useNavigate();

    const startTimer = () => {
      let countDownDate
      if (timerPembayaran) {
        countDownDate = new Date().getTime() + parseInt(timerPembayaran);
      } else {
        countDownDate = new Date().getTime() + 86400000;
      }
      setDateLimit(new Date().toString());

      interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now;
        window.sessionStorage.setItem("TimerPembayaran", distance);

        const hours = Math.floor(distance % (1000*60 * 60* 24) / (1000 * 60 * 60 ));
        const minutes = Math.floor(distance % (1000*60 * 60) / (1000 * 60 ));
        const seconds = Math.floor(distance % (1000*60 ) / (1000 ));

        if(distance <= 0){
          //stop 
          clearInterval(interval.current);
          window.localStorage.removeItem("dataStep");
          window.localStorage.removeItem("LastOrder");
          navigate("/");
        }else {
          if(hours < 10) {
            setTimerHour(`0${hours}`);
          } else {
            setTimerHour(hours);
          }
          if(minutes < 10) {
            setTimerMinutes(`0${minutes}`);
          } else {
            setTimerMinutes(minutes);
          }
          if(seconds < 10) {
            setTimerSeconds(`0${seconds}`);
          } else {
            setTimerSeconds(seconds);
          }
        }

      }, 1000);
    }

    const startTimerKonfirmasi = () => {
      const countDownDate = new Date().getTime() + 600000;

      interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now;

        const minutes = Math.floor(distance % (1000*60 * 60) / (1000 * 60 ));
        const seconds = Math.floor(distance % (1000*60 ) / (1000 ));

        if(distance <= 0){
          //stop 
          clearInterval(interval.current);
          setPesananBerhasil(true);
        } else {
          if(minutes < 10) {
            setTimerMinutes(`0${minutes}`);
          } else {
            setTimerMinutes(minutes);
          }
          if(seconds < 10) {
            setTimerSeconds(`0${seconds}`);
          } else {
            setTimerSeconds(seconds);
          }
        }

      }, 1000);
    }

    useEffect(()=> {
      if (timerType) {
        if (pesananBerhasil){
          clearInterval(interval.current);
        } else {
          startTimer();
        }
      }else {
        startTimerKonfirmasi();
      }
    }, [])

    const dayLay = () => {
      return (
        <div className='timer-section'>
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
      );  
    }
    
    const tenLay = () => {
      return (
        <div className='timer-section'>
          <div className='timer'>
            <p>{timerMinutes}</p>
          </div>
          <p>:</p>
          <div className='timer'>
            <p>{timerSeconds}</p>
          </div>
        </div>
      ); 
    }
  
  return (
    <div>{timerType ? dayLay() : tenLay()}</div>
  );
}

export default Timer
