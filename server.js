const express = require("express");
const logger = require("morgan");
const itemsRouter = require("./routes/items");
const app = express();
const cors = require("cors");
const { ALLOWED_ORIGINS, PORT } = require("./constants");

app.use(logger("dev"));
app.use(express.json());
// In this case, the below line is optional
app.use(express.urlencoded({ extended: false }));

// Enable cors
app.use(
  cors({
    origin: (origin, cb) => {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return cb(null, true);
      if (ALLOWED_ORIGINS.indexOf(origin) === -1) {
        return cb(new Error("You have been blocked by CORS policy"), false);
      }
      return cb(null, true);
    },
  })
);

app.use("/api", itemsRouter);
app.use("/", (_, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
