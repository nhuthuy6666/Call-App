import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/images/avatar.jpg';
import { MdOutlineMic } from "react-icons/md";
import { FaVolumeLow } from "react-icons/fa6";
import { IoMdMicOff } from "react-icons/io";
import { FaVolumeXmark } from "react-icons/fa6";
import { MdCallEnd } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const AudioCall = () => {
  const audioRef = useRef(null);
  const [stateMic, setStateMic] = useState(true);
  const [stateVolume, setStateVolume] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const openMicro = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (audioRef.current) {
        audioRef.current.srcObject = stream;
      }
    };
    openMicro();

    return () => {
      if (audioRef.current) {
        const stream = audioRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        audioRef.current.srcObject = null;
      }
    };
  }, []);

  const btnMic = () => {
    if (audioRef.current) {
      const stream = audioRef.current.srcObject;
      const audioTrack = stream.getAudioTracks();
      if (audioTrack.length > 0) {
        audioTrack[0].enabled = !audioTrack[0].enabled;
        setStateMic(audioTrack[0].enabled);
      }
    }
  };
  const btnVolume = () => {
    if (audioRef.current) {
      const stream = audioRef.current.srcObject;
      const audioTracks = stream.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks[0].enabled = !audioTracks[0].enabled;
        setStateVolume(audioTracks[0].enabled);
      }
    }
  };

  const EndCall = () => {
    if (audioRef.current) {
      const stream = audioRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      audioRef.current.srcObject = null;
    }
    navigate('/EndCall');
  };

  return (
    <div className='p-20 flex justify-center items-center'>
      <div className='w-[640px] h-[480px] bg-blue-500 rounded-2xl flex flex-col justify-center items-center'>
        <img src={avatar} alt="User Avatar" className='rounded-full' width={150} />
        <p className='text-white text-xl mt-2'>User name</p>
        <p className='text-white mt-4'>00:00:00</p>
        <div className='flex justify-center items-center mt-10'>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl me-6' onClick={btnMic}>{stateMic?<MdOutlineMic />:<IoMdMicOff />}</a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl me-6' onClick={btnVolume}>{stateVolume?<FaVolumeLow />:<FaVolumeXmark />}</a>
        <a href='#' className='rounded-full p-5 bg-red-600 text-white text-md lg:text-xl me-6'onClick={EndCall}><MdCallEnd /></a>
        <a href="#" className='rounded-full p-5 bg-purple-700 text-white text-md lg:text-xl'><CiMenuKebab /></a>
        </div>
      </div>
    </div>
  );
};

export default AudioCall;
