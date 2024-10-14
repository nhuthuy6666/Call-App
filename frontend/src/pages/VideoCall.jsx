import React, { useEffect, useRef, useState } from 'react';
import { BsCameraVideoFill } from "react-icons/bs";
import { MdOutlineMic } from "react-icons/md";
import { FaVolumeLow } from "react-icons/fa6";
import { BsCameraVideoOffFill } from "react-icons/bs";
import { IoMdMicOff } from "react-icons/io";
import { FaVolumeXmark } from "react-icons/fa6";
import { MdCallEnd } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
  const videoRef = useRef(null);
  const [stateVideo, setStateVideo] = useState(true);
  const [stateMic, setStateMic] = useState(true);
  const [stateVolume, setStateVolume] = useState(true);
  const navigate = useNavigate();
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
  const EndCall = () => {
    if (videoRef.current) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      videoRef.current.srcObject = null;
    }
    navigate('/EndCall');
  };
  return (
    <div className='flex flex-col justify-center items-center p-10 bg-white'>
      <div className='relative flex justify-center items-center'>
        <video ref={videoRef} autoPlay playsInline width="640" height="480" className='rounded-xl'></video> {/*video cua khach moi*/}
        <video ref={videoRef} autoPlay playsInline width="160" height="170" className='absolute rounded-xl top-6 right-6'></video>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <a className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl me-6 cursor-pointer'onClick={btnCamera}>{stateVideo?<BsCameraVideoFill />:<BsCameraVideoOffFill />}</a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl me-6' onClick={btnMic}>{stateMic?<MdOutlineMic />:<IoMdMicOff />}</a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl me-6' onClick={btnVolume}>{stateVolume?<FaVolumeLow />:<FaVolumeXmark />}</a>
        <a href='#' className='rounded-full p-5 bg-red-600 text-white text-md lg:text-xl me-6'onClick={EndCall}><MdCallEnd /></a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl'><CiMenuKebab /></a>
      </div>
      <div className='mt-4'>
        <p>00:00:00</p>
      </div>
    </div>
  )
}

export default VideoCall
