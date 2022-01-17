import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

import blogPostsRoutes from "./routes/blogPosts.js";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URI =
  "mongodb+srv://clustertest:clustertest@clustertest.filgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT | 5000;

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((error) => {
    console.log(error);
  });

app.use("/blog-posts", blogPostsRoutes);

app.get("/", blogPostsRoutes);
