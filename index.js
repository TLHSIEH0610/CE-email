import express from "express";
import cors from "cors";

const port = 4000;

const app = express();
app.use(cors());

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
