const express = require('express');
const cors = require('cors');

const algoRouter = require('./routes/algoRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/algo', algoRouter);

const port = 5000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
