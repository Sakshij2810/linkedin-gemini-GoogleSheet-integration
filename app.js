// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// //route import
// import dataRoute from "./routes/dataRoute.js";
// import sheetRoute from "./routes/sheetRoute.js";

// dotenv.config({ path: "./config/config.env" });

// const app = express();
// const PORT = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// //routes
// app.use("/api/v1", dataRoute);
// app.use("/api/v1", sheetRoute);

// app.get("/", (req, res) => {
//   res.send(
//     `Server is working on PORT ${PORT} and project name is Linkedin-Gemini-GoogleSheet-Integration`
//   );
// });

// export default app;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";

// Route imports
import dataRoute from "./routes/dataRoute.js";
import sheetRoute from "./routes/sheetRoute.js";
import authRoute from "./routes/authRoute.js";

// Passport config
import "./config/passport.js";

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/v1", dataRoute);
app.use("/api/v1", sheetRoute);
app.use("/api/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send(
    `Server is working on PORT ${PORT} and project name is Linkedin-Gemini-GoogleSheet-Integration`
  );
});

export default app;
