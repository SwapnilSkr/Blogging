const express = require('express');
const dotenv = require('dotenv');
const connectToDb = require('./database/db_connection');
const app = express();
const cors = require('cors');
dotenv.config()
const port = process.env.PORT || 8000;

const userRouter = require('./routes/userRoute');
const blogRouter = require('./routes/blogRoute');

app.use(express.json({limit: '50mb'}));
app.use(cors())

connectToDb().then(
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
);

app.get('/', (req, res) => {
    res.status(200).json({port: port, msg:'Hello World!'})
});

//////// Routes //////////////
app.use('/users', userRouter);
app.use('/blogs', blogRouter);

