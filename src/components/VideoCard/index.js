import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ data }) => {
  const { url, title, shared_by, description } = data;
  return (
    <div className="w-full grid grid-cols-2 mb-10 h-[200px]">
      <div className="col-span-1">
        <ReactPlayer url={url} light width="auto" height="100%" />
      </div>
      <div className="col-span-1 overflow-hidden ml-5 truncate-mul-lines">
        <h3 className="text-yellow-500 truncate text-2xl">{title}</h3>
        <div>Shared by: {shared_by}</div>
        <div>Description</div>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default VideoCard;
