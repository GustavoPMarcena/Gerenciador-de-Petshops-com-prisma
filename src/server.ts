import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import petShopRoutes from './routes/petShopRoutes';
import petRoutes from './routes/petRoutes';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use('/petshops', petShopRoutes);
app.use('/pets', petRoutes);

app.listen(port, () => {
    console.log("server online on port 3000");
});