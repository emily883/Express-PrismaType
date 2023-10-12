import app from "./src/app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log(`Corriento en https://localhost:${PORT}`);
})