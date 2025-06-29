import express from "express";
import { router as taskRouter } from "./src/router/task-router.js";
import cors from 'cors'
import dotenv from 'dotenv'
import { config } from "./config/config.js";

const PORT = config.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: config.CORS_ORIGIN_URL,
    credentials: true
};

app.use(cors(corsOptions));

app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json({ ok: "App.js" });
});
const server = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
