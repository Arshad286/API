import express from "express";
import dotenv from "dotenv";
import Connection from "./config/db.js";
import schoolRoutes from "./routes/school-routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

Connection();

app.use(express.json());

app.use("/api/schools", schoolRoutes);

    app.listen(PORT, () => {
      console.log(`Server is running in ${PORT}`);
    });


