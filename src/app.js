import express from "express";
import morgan from "morgan";
import languageRoutes from "./routes/lenguage.routes";

const app = express();

// Settings

app.set('port', 4000);

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use("/api/languages", languageRoutes);

export default app;