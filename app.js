const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); //
app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
