//db 접속. 몽구스를 사용한다.

const mongoose = require("mongoose");
const db = mongoose
  .connect(`mongodb+srv://raros:${process.env.MONGO_PASSWORD}@cluster0.ckq4lpc.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "front-test",
    //몽고디비 들어가서 브라우저 컬렉션 안에 있는 테이블 이름
  })
  .then(() => {
    console.log("db연결");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
