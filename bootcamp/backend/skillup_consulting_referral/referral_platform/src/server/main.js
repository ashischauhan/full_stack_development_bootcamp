import express from "express";
import ViteExpress from "vite-express";

import adminUsersRouter from "./routes/adminUser.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/admin-users", adminUsersRouter);
app.use("/auth", authRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
