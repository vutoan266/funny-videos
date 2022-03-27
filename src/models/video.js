import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  url: String,
  shared_by: String,
  title: String,
  description: String,
  video_id: String,
});

module.exports = mongoose.models.Video || mongoose.model("Video", videoSchema);
