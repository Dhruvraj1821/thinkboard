import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5001 ;

//middleware
app.use(express.json());

// enable CORS so frontend dev server (different origin) can call this API
app.use(cors());

app.use(rateLimiter);
//our simple custom middleware inside the code
//app.use((req,res,next)=>{
//    console.log(`Req method is ${req.method} & Req url is ${req.url}`);
//    next();
//});

app.use("/api/notes",notesRoutes);


connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log("Server started on PORT : ",PORT)
    });  
})  


