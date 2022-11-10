import React, { useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TypingName from './Component/TypingName';
import abc from './asset/sound.mp3'
import ReactAudioPlayer from 'react-audio-player';
import TypingDate from './Component/TypePingDate';
import TypingTamSu from './Component/TypePingTamSu';
import { Modal } from 'antd';


function App() {
  const [toggle, setToggle] = useState(false);
  const clsss = toggle && "active";

  const [numberImage, setNumberImage] = useState(0);

  const [timeOutNext, setTimeOutNext] = useState<any>();

  const [showText, setShowText] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const imageList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '16.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '15.jpg', '7.jpg']


  useEffect(() => {
    setTimeout(() => {
      changeCheckBox()
    }, 1500)

  }, [toggle])

  function changeCheckBox() {
    setToggle(!toggle)
  }


  // async function openMusic() {
  //   await navigator.mediaDevices.getUserMedia({ audio: true, s });
  // }

  useEffect(() => {
    clearTimeout(timeOutNext)
    if (numberImage + 1 < imageList.length) {
      setTimeOutNext(setTimeout(() => {
        setNumberImage(next => next + 1)
      }, 3000))
    } else {
      setShowText(true)
    }
  }, [numberImage])



  function nextImage() {
    setNumberImage(next => next + 1)
  }

  function preImage() {
    setNumberImage(pre => pre - 1)
  }

  return (
    <div className="App">
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <input type="checkbox" id="r2" checked={toggle} onChange={changeCheckBox} />
          <label htmlFor="r2" className="react">
            <i data-icon="❤️"></i>
          </label>
          <TypingName />
          <ReactAudioPlayer
            style={{ marginTop: 50 }}
            src={abc}
            autoPlay={true}
            loop={true}
            controls
          />
        </div>
        <div style={{ width: '50%' }}>
          <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 50, marginBottom: 50 }}>
            {numberImage + 1 > 1 && showText && <span onClick={() => preImage()} style={{ fontSize: 30, color: 'black', cursor: 'pointer' }}>&#8249;</span>}
            <img width="60%" style={{ marginLeft: 10, marginRight: 10, objectFit: 'contain', maxHeight: 500, borderRadius: 10 }} src={require(`./asset/image/${imageList[numberImage]}`)} />
            {numberImage + 1 < imageList.length && showText && <span onClick={() => nextImage()} style={{ fontSize: 30, color: 'black', cursor: 'pointer' }}>&#8250;</span>}
          </div>
          <div>
            <TypingDate />
          </div>
        </div>
      </div>
      {showText && <img onClick={() => setShowDialog(true)} src={require('./asset/latter.gif')} height={50} width={50} />}

      {showDialog && < Modal
        visible={showDialog}
        onCancel={() => setShowDialog(false)}
        cancelText={'Yêu anh 2999'}
        okText={'Yêu anh 3000'}
        width={500}
        onOk={() => setShowDialog(false)}>
        <TypingTamSu />
      </Modal>
      }
    </div>
  );
}

export default App;
