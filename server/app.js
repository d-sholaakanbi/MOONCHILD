const mongoose = require("mongoose");
const express = require('express');
const app = express();
const errorHandler = require('./PRODUCTS/middleware/errorHandler');
const notFound = require('./PRODUCTS/middleware/notFoundRoutes');
const notFoundUsers = require('./AUTH/middleware/notFound');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', true);


// DB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => {
    console.error("UNABLE to connect to DB", err); 
});

// Middleware
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(cookieParser());
app.use(cors()); // Enable CORS for all origins

// Import routes
const categoryRouter = require("./PRODUCTS/routes/categoriesRouter");
const productsRouter = require("./PRODUCTS/routes/productRouter");
console.log("Using category routes"); 

const userRouter = require("./AUTH/routes/user")

// Use routes
app.use('/api/categories', categoryRouter);
app.use('/api/products', productsRouter);
app.use('/api', userRouter);

// Error handling middleware
app.use(errorHandler);

// Not found middleware
app.use(notFound);
app.use(notFoundUsers);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
