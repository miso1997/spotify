import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerProvider = (props) => {
  const audioref = useRef(null);
  const seekbar = useRef(null);
  const seekbg = useRef(null);

  const [track, settrack] = useState(songsData[0]);
  const [playstatus, setplaystatus] = useState(false);
  const [time, settime] = useState({
    currentTime: { minute: 0, second: 0 },
    totalTime: { minute: 0, second: 0 },
  });

  const seekTo = (e) => {
  const rect = seekbg.current.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const width = rect.width;
  const percent = offsetX / width;
  const newTime = percent * audioref.current.duration;
  audioref.current.currentTime = newTime;
};

  const [volume, setVolume] = useState(1); // default 100%

  // Update audio volume when state changes
  useEffect(() => {
    if (audioref.current) {
      audioref.current.volume = volume;
    }
  }, [volume]);

useEffect(() => {
  const audio = audioref.current;
  if (!audio) return;

  audio.addEventListener("timeupdate", updateTime);

  return () => {
    audio.removeEventListener("timeupdate", updateTime);
  };
}, []);

  // Play or Pause audio
  const play = () => {
    audioref.current.play();
    setplaystatus(true);
  };

  const pause = () => {
    audioref.current.pause();
    setplaystatus(false);
  };

  const playNext = () => {
    const nextIndex = (track.id + 1) % songsData.length;
    settrack(songsData[nextIndex]);
  };

  // ⏮️ Play previous track
  const playPrevious = () => {
    const prevIndex = (track.id - 1 + songsData.length) % songsData.length;
    settrack(songsData[prevIndex]);
  };


  const [muted,setmuted]=useState(false) 


  const togglemute=()=>{
    setmuted(prev=>!prev)
  }

  // Format seconds into {minute, second}
  const formatTime = (secs) => ({
    minute: Math.floor(secs / 60),
    second: Math.floor(secs % 60),
  });

  // Sync current time and update seekbar width
  const updateTime = () => {
    const audio = audioref.current;
    const curr = audio.currentTime;
    const total = audio.duration || 0;

    const percentage = (curr / total) * 100;
    if (seekbar.current) {
      seekbar.current.style.width = `${percentage}%`;
    }

    settime({
      currentTime: formatTime(curr),
      totalTime: formatTime(total),
    });
  };

useEffect(() => {
  if (audioref.current) {
    audioref.current.volume = volume;
  }
}, [volume]);


  // Automatically play when track changes
  useEffect(() => {
    if (playstatus) {
      play();
    }
  }, [track]);

  const contextvalue = {
    audioref,
    seekbar,
    seekbg,
    track,
    settrack,
    playstatus,
    setplaystatus,
    time,
    settime,
    play,
    pause,
    updateTime,
    songsData,
    playNext,
    playPrevious,
    volume,
    setVolume,
    muted,
    setmuted,
    togglemute,
    seekTo
  };

  return (
    <PlayerContext.Provider value={contextvalue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
