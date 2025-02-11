const express = require('express');
const sequelize = require('./config/db');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

async function initDb() {
    try {
        await sequelize.sync({ alter: true });
        console.log('Db Synced');
    } catch (error) {
        console.error('Unbale to sync db: ', error);
    }
}

initDb();
app.use('/user', userRoute);

PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});