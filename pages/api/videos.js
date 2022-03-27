import Video from "../../src/models/video";
import apiRequest from "../../src/utils/apiRequest";
import { getYoutubeVideoId } from "../../src/utils/utils";

export default async function videoHandler(req, res) {
  const {
    body: { url, shared_by },
    method,
  } = req;

  switch (method) {
    case "GET":
      Video.find({}, function (err, videos) {
        if (err) res.status(200).json({ result: "error", error: err });
        res.status(200).json({ result: "success", data: videos });
      });
      break;
    case "POST":
      if (!url) {
        res
          .status(200)
          .json({ result: "error", message: "Please fill all data!" });
      } else {
        // should check shared yet?
        const videoId = getYoutubeVideoId(url);
        const videoDetail =
          await apiRequest.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}
        &fields=items(id,snippet(channelId,title,categoryId,description),statistics)&part=snippet,statistics`);
        if (!videoDetail?.items?.[0]) {
          res
            .status(200)
            .json({ result: "error", message: "Video does not exist" });
          return;
        }
        const {
          items: [
            {
              id,
              snippet: { title, description },
            },
          ],
        } = videoDetail;
        const newVideo = new Video({
          url,
          shared_by,
          video_id: id,
          title,
          description,
        });
        newVideo.save((err) => {
          if (err) {
            res.status(200).json({ result: "error", message: "DB save error" });
          } else {
            res.status(200).json({ result: "success", data: newVideo });
          }
        });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
