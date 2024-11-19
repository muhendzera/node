import bodyParser from "body-parser";
import router from "./router";

const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT: string | number = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
