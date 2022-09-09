import React , {useState} from 'react';
import Back from '../../assets/image/track-payment/left_back.svg';
import Done from '../../assets/image/track-payment/track-done.svg';
import oneTrack from '../../assets/image/track-payment/one-preview.svg';
import twoToDo from '../../assets/image/track-payment/two-to-do.svg';
import twoTrack from '../../assets/image/track-payment/two-preview.svg';
import threeToDo from '../../assets/image/track-payment/three-to-do.svg';
import threeTrack from '../../assets/image/track-payment/three-preview.svg';
import lineTrack from '../../assets/image/track-payment/line-track.svg';
import './index.css';

const PaymentStep = (props) => {
    const {previousPage} = props;
    const [oneDone, setOneDone] = useState(true);
    const [twoDone, setTwoDone] = useState(true);
    const [threeDone, setThreeDone] = useState(false);

    const trackLineOne = () => {

        if(oneDone) {
            return <div className='number-track'>
                <span><img src={Done}></img></span>
                <span>Pilih Metode</span>
            </div>
        } else {
            return <div className='number-track'>
                <span><img src={oneTrack}></img></span>
                <span>Pilih Metode</span>
            </div>
        }
    }
    
    const trackLineTwo = () => {
        if(oneDone) {
            return <div className='number-track'>
                <span><img src={twoTrack}></img></span>
                <span>Bayar</span>
            </div>
        } else {
            if(twoDone){
                return <div className='number-track'>
                    <span><img src={Done}></img></span>
                    <span>Bayar</span>
                </div>
            } else {
                return <div className='number-track'>
                    <span><img src={twoToDo}></img></span>
                    <span>Bayar</span>
                </div>
            }
        }
    }

    const trackLineThree = () => {
        if(twoDone) {
            return <div className='number-track'>
                <span><img src={threeTrack}></img></span>
                <span>Tiket</span>
            </div>
        } else {
            return <div className='number-track'>
                <span><img src={threeToDo}></img></span>
                <span>Tiket</span>
            </div>
            
        }
    }

    return <div className='nav-payment'>
        <div className='back-payment track-payment'>
            <a href='#' className='back-payment'>
                <img src={Back}>
                </img>
                <span>{previousPage}</span>
            </a>
            
        </div>
        <div className='track-payment'>
            {trackLineOne()}
            <div className='line-track'><img src={lineTrack}></img></div> 
            {trackLineTwo()}
            <div className='line-track' ><img src={lineTrack} ></img></div> 
            {trackLineThree()}
        </div>

    </div>
}

export default PaymentStep;