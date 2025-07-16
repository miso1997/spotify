import React, { useContext ,useRef} from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";



export default function App() {
  const { audioref, updateTime,track,playNext,muted } = useContext(PlayerContext);

  return (
    <div className="flex flex-col h-screen bg-black text-white gap-3">
      {/* Top Section: Sidebar + Display */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar  />
        <Display className="flex-1 overflow-y-auto ml-2 mr-3" />
      </div>

      {/* Bottom Section: Player */}
      <Player />
<audio
  ref={audioref}
  src={track?.file}
  preload="auto"
  onEnded={playNext}
  muted={muted}
/>

    </div>
  );
}
