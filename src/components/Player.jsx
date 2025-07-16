import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { songsData, assets } from "../assets/assets";

const Player = () => {
  const {
    play,
    pause,
    playstatus,
    seekbg,
    seekbar,
    playNext,
    playPrevious,
    track,
    volume,
    setVolume,
    togglemute,
    muted,
    seekTo,
    time
  } = useContext(PlayerContext);

  const decreaseVolume = () => {
    setVolume(prev => Math.max(0, prev - 0.1)); // lower volume by 10%
  };


  return (
    <div className="w-full bg-black text-white px-6 py-3 flex justify-between items-center border-t border-gray-800">

      {/* Left: Song Info */}
      <div className="flex items-center gap-3 min-w-[200px]">
        <img className="w-12 h-12 rounded" src={track.image} alt="Song Art" />
        <div>
          <p className="text-sm font-semibold">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 20)}</p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center gap-2 flex-1">
        <div className="flex gap-4 items-center">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous"
            onClick={playPrevious}
          />
          <img
            className="w-6 cursor-pointer"
            src={playstatus ? assets.pause_icon : assets.play_icon}
            alt="Play"
            onClick={playstatus ? pause : play}
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next"
            onClick={playNext}
          />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>

        {/* Seek bar */}
        <div className="flex items-center gap-2 w-full max-w-[500px]">

          <p className="text-xs">

            {time.currentTime.minute}:{String(time.currentTime.second).padStart(2, '0')}
          </p>
          <div ref={seekbg} className="flex-1 bg-gray-600 h-1 rounded-full relative cursor-pointer" onClick={seekTo}>
            <div ref={seekbar} className="bg-green-500 h-1 w-[30%] rounded-full absolute top-0 left-0"></div>
          </div>
          <p className="text-xs">{time.totalTime.minute}:{String(time.totalTime.second).padStart(2, '0')}</p>
        </div>
      </div>

      {/* Right: Additional controls */}
      <div className="hidden lg:flex items-center gap-3 opacity-70 min-w-[200px] justify-end">
        {/* Speaker Icon */}
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 h-1 accent-green-500 cursor-pointer"
        />
        <button onClick={togglemute}>
          <img className="w-4"
            src={muted ? assets.speaker_icon : assets.mic_icon}
            alt={muted ? "Unmute" : "Mute"} />
        </button>
      </div>
    </div>
  );
};

export default Player;
