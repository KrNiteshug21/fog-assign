import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import connectDB from "./config/dbConn.js";
import settingRoute from "./routes/settingRoute.js";
import rulesRoute from "./routes/rulesRoute.js";
import advancedSettingRoute from "./routes/advancedSettingRoute.js";

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.use("/api/settings", settingRoute);
app.use("/api/rules", rulesRoute);
app.use("/api/advanced-settings", advancedSettingRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
