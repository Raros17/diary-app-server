const mongoose = require("mongoose");

const DiarySchema = mongoose.Schema({
  author: String,
  contents: String,
  emotion: Number,
  date: Date,
});
const Diary = mongoose.model("diary", DiarySchema);
module.exports = Diary;
