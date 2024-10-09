import express from 'express';
import {router as vehicleRouter} from './routes/vehicles';
import {router as userRouter } from './routes/users';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('ABC');
});

app.use('/vehicles', vehicleRouter);
app.use('/users', userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
