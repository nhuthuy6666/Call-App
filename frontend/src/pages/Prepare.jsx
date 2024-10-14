import React, { useEffect, useRef, useState } from 'react';
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlineMic } from "react-icons/md";
import { FaVolumeLow } from "react-icons/fa6";
import { BsCameraVideoOffFill } from "react-icons/bs";
import { IoMdMicOff } from "react-icons/io";
import { FaVolumeXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';


const Prepare = () => {
  const videoRef = useRef(null);
  const [stateVideo, setStateVideo] = useState(true);
  const [stateMic, setStateMic] = useState(true);
  const [stateVolume, setStateVolume] = useState(true);
  useEffect (() => {
    const openCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
    openCamera();
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        videoRef.current.srcObject = null;
      }
    };
  }, []);
  const btnCamera = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      setStateVideo(videoTrack.enabled);
    }
  };
  const btnMic = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      const audioTrack = stream.getAudioTracks();
      if (audioTrack.length > 0) {
        audioTrack[0].enabled = !audioTrack[0].enabled;
        setStateMic(audioTrack[0].enabled);
      }
    }
  };
  const btnVolume = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !audioTracks[0].enabled;
        setStateVolume(audioTracks[0].enabled);
      }
    }
  };

  return (
  <div className='container bg-white flex flex-col justify-center items-center lg:flex-row md:py-10 md:px-20 p-10'>
    <div className='flex flex-col justify-center items-center'>
      <video ref={videoRef} autoPlay playsInline width="640" height="480" className='rounded-2xl'></video>
      <div className='flex justify-center items-center mt-10'>
        <a className='rounded-full p-5 bg-purple-700 text-white text-xl me-6 cursor-pointer'onClick={btnCamera}>{stateVideo?<BsCameraVideoFill />:<BsCameraVideoOffFill />}</a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-xl me-6' onClick={btnMic}>{stateMic?<MdOutlineMic />:<IoMdMicOff />}</a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-xl' onClick={btnVolume}>{stateVolume?<FaVolumeLow />:<FaVolumeXmark />}</a>
      </div>
    </div>
    <div className='flex flex-col justify-center mt-20 lg:ms-20 lg:mt-0 p-20'>
      <label htmlFor="invite" className='text-2xl text-blue-600 font-semibold mb-6'>Invite your friend: </label>
      <div className='flex'>
        <input type="text" placeholder='Phone number' className='px-20 py-3 ps-2 rounded-xl border-2 border-black' />
        <a className='ms-2 bg-blue-600 text-white p-4 rounded-xl flex justify-center items-center cursor-pointer'><FaSearch /></a>
      </div>
      <div className='flex'>
      <NavLink to = "/VideoCall" className='py-3 px-10 lg:px-20 flex justify-center items-center bg-blue-600 text-white rounded-xl mt-10 text-lg cursor-pointer'>Start<VscDebugStart className='ms-2' /></NavLink>
      </div>
    </div>
  </div>
  )
}

export default Prepare
