import express from "express";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res)=>{
    res.json({
        service: "auth-service",
        status: "ok"
    });
});

export default app;