const express = require("express");
const app = express();
const cors = require("cors");
app.set("port", process.env.PORT || 5000);
const PORT = app.get("port");
const dotenv = require("dotenv");
const diarySchema = require("./models/DiarySchema");
dotenv.config();
const db = require("./db/db");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/diary/list", async (req, res) => {
  //db접속해서 기존의 데이터 불러오기
  const diaryList = await diarySchema.find();
  res.json(diaryList);
});

app.post("/diary/insert", async (req, res) => {
  const insertDiary = new diarySchema({ ...req.body });
  await insertDiary.save();
  res.json({ state: "ok" });
});

app.delete("/diary/delete/:id", async (req, res) => {
  //console.log(req.params.id);
  const { id } = req.params;
  await diarySchema.deleteOne({ _id: id });
  res.json({ state: "ok" });
});

//바꿀땐 put 씀
app.put("/diary/modify/:id", async (req, res) => {
  const { id } = req.params;
  const { contents } = req.body;
  await diarySchema.updateOne({ _id: id }, { $set: { contents: contents } });
  res.json({ state: "ok" });
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기중`);
});
