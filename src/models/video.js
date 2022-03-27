import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  url: String,
  share_by: String,
  title: String,
  description: String,
});

module.exports = mongoose.models.Video || mongoose.model("Video", videoSchema);
