import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import petShopRoutes from './routes/petShopRoutes';
import petRoutes from './routes/petRoutes';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;


const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use('/petshops', petShopRoutes);
app.use('/pets', petRoutes);

app.listen(PORT, () => {
    console.log("server online on port 3000");
});