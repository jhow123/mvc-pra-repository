const express = require("express");
const connectDB = require('./database');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/api', userRoutes); // Correção: use userRoutes, não routes

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
