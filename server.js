const express = require("express");
const logger = require("morgan");
const itemsRouter = require("./routes/items");
const app = express();
const { PORT } = require("./constants");

app.use(logger("dev"));
app.use(express.json());
// In this case, the below line is optional
app.use(express.urlencoded({ extended: false }));

app.use("/api", itemsRouter);
app.use("/", (_, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
