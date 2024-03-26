import YouTube, { type YouTubeEvent } from "react-youtube";

const VideoPlayer = ({ id }: { id: string }) => {
	const opts = {
		width: "100%",
		borderRadius: "2rem",
		playerVars: { autoplay: 0 },
	};
	const videoReady = (event: YouTubeEvent) => {
		event.target.pauseVideo();
	};

	return (
		<div className="min-w-[40%]">
			<div
				style={{
					maxWidth: "800px",
					margin: "auto",

					minHeight: "30vh",
					borderRadius: "12px",
					overflow: "hidden",
				}}
			>
				<YouTube videoId={id} opts={opts} onReady={videoReady} />
			</div>
		</div>
	);
};

export default VideoPlayer;
