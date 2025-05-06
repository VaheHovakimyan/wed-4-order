import { useEffect, useState } from "react";
import { Howl } from "howler";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import "./Sound.scss";

const sound = new Howl({
  src: ["/wedding-music.mp3"],
  volume: 1.0,
  loop: false,
});

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    togglePlay();
  }, []);

  return (
    <button className="sound_div" onClick={togglePlay}>
      {isPlaying ? (
        <PauseCircleOutlineIcon sx={{ fontSize: 30 }} />
      ) : (
        <PlayCircleOutlineIcon sx={{ fontSize: 30 }} />
      )}
    </button>
  );
};

export default Sound;
