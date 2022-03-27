import React, { useEffect, useState } from "react";
import { getAllVideosAPI } from "../../apis";
import VideoCard from "../../components/VideoCard";

export default function ListPage() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getAllVideosAPI().then((res) => {
      setVideos(res);
    });
  }, []);

  return (
    <div className="max-w-[700px] my-10 mx-auto">
      {!videos && "Loading.."}
      {videos?.map((video) => (
        <VideoCard key={video.url} data={video} />
      ))}
    </div>
  );
}
