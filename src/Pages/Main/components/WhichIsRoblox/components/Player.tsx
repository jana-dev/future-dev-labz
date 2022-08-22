import ReactPlayer from "react-player";
import { useStyles } from "./Player.styles";

interface PlayerProps {
  urlVideo: string;
  autoPlay?: boolean;
  controls?: boolean;
}

const Player = ({
  urlVideo,
  autoPlay = false,
  controls = false,
}: PlayerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.videoContainer}>
      <ReactPlayer
        url={urlVideo}
        className={classes.videoPlayer}
        playing={autoPlay}
        width="100%"
        height="100%"
        controls={controls}
      />
    </div>
  );
};

export default Player;
