const express = require('express');

const algoRouter = require('./routes/algoRoutes');

const app = express();

app.use(express.json());
app.use('/api/v1/algo', algoRouter);

const port = 5000;
app.listen(port);
