import { nanoid } from "nanoid";
import { useVideo } from "./utils/fetchData";
import VideoPlayer from "./VideoPlayer";
const ExerciseVideos = ({ name }: { name: string }) => {
	const { data } = useVideo(name);


	return (
		<div
			key={nanoid()}
			className="flex flex-col flex-wrap justify-center gap-5 pb-5 my-10 lg:flex-row"
		>
			{data?.map((video) => (
				<VideoPlayer key={nanoid()} id={video.video.videoId} />
			))}
		</div>
	);
};

export default ExerciseVideos;
