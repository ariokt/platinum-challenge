import React from 'react';
import Back from '../../assets/image/track-payment/left_back.svg';
import Done from '../../assets/image/track-payment/track-done.svg';
import oneTrack from '../../assets/image/track-payment/one-preview.svg';
import twoTrack from '../../assets/image/track-payment/two-to-do.svg';
import twoToDo from '../../assets/image/track-payment/two-preview.svg';
import threeTrack from '../../assets/image/track-payment/three-to-do.svg';
import threeToDo from '../../assets/image/track-payment/three-preview.svg';
import lineTrack from '../../assets/image/track-payment/line-track.svg';
import { useNavigate } from "react-router-dom";
import './index.css';

const PaymentStep = ({ stepDone, pesananBerhasil }) => {
    
    const timer = window.sessionStorage.getItem("TimerPembayaran");
    const navigate = useNavigate();

    const trackLineOne = () => {
        if(stepDone.one) {
            return (
                <div className='number-track'>
                    <span><img alt="" src={Done}></img></span>
                    <span>Pilih Metode</span>
                </div>
            ); 
        } else {
            return (
                <div className='number-track'>
                    <span><img alt="" src={oneTrack}></img></span>
                    <span>Pilih Metode</span>
                </div>
            ); 
        }
    }
    
    const trackLineTwo = () => {
        if(stepDone.two){
            return (
                <div className='number-track'>
                    <span><img alt="" src={Done}></img></span>
                    <span>Bayar</span>
                </div>
            ); 
        } else if (stepDone.one) {
            return (
                <div className='number-track'>
                    <span><img alt="" src={twoToDo}></img></span>
                    <span>Bayar</span>
                </div>
            ); 
        } else {
            return (
                <div className='number-track'>
                    <span><img alt="" src={twoTrack}></img></span>
                    <span>Bayar</span>
                </div> 
            );
        }
    }

    const trackLineThree = () => {
        if(stepDone.three) {
            return (
                <div className='number-track'>
                    <span><img alt="" src={Done}></img></span>
                    <span>Tiket</span>
                </div>
            ); 
        } else if (stepDone.one && stepDone.two) {
            return (
                <div className='number-track'>
                    <span><img alt="" src={threeToDo}></img></span>
                    <span>Tiket</span>
                </div>
            ); 
        } else {
            return (
                <div className='number-track'>
                    <span><img alt="" src={threeTrack}></img></span>
                    <span>Tiket</span>
                </div>
            );
        }
    }

    const handleBack = (e) => {
        e.preventDefault();
        if (timer) {
            window.sessionStorage.removeItem("idPesanan");
            window.sessionStorage.removeItem("pesananBerhasil");
            window.sessionStorage.removeItem("dataStep");
            window.sessionStorage.removeItem("TimerPembayaran");
            window.sessionStorage.removeItem("LastOrder");
            navigate("/");
            window.location.reload();
        } else {
            window.sessionStorage.removeItem("dataStep");
            window.sessionStorage.removeItem("LastOrder");
            navigate("/");
        }
    }

    return (
        <div className='nav-payment'>
            <div className='back-payment track-payment'>
                <button href='' className='back-payment' onClick={handleBack}>
                    <img alt="" src={Back}></img>
                    {pesananBerhasil ? <span>Tiket</span> : <span>Pembayaran</span>}
                </button>
            </div>
            <div className='track-payment'>
                {trackLineOne()}
                <div className='line-track'><img alt="" src={lineTrack}></img></div> 
                {trackLineTwo()}
                <div className='line-track' ><img alt="" src={lineTrack} ></img></div> 
                {trackLineThree()}
            </div>
        </div>
    );
}

export default PaymentStep;