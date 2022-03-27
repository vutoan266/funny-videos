import request from "../utils/request";

export const getAllVideosAPI = () => request.get("api/videos");

export const shareVideoAPI = (data) => request.post("api/videos", data);

export const registerAPI = (data) => request.post("api/register", data);
