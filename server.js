import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
import catchAll from './middlewares/catchAll.js';
import centralErrorHandler from './middlewares/centralErrorHandler.js';

const app = express();
const port = 3000;

app.use(express.json())

mongoose.connect("mongodb://localhost/todosList")

app.get('/', (req,res) => {
    res.send("Home Page");
})

app.use("/todo", routes);

app.use(catchAll);
app.use(centralErrorHandler);

app.listen(port, () => console.log("Server's up at http://localhost:3000"))