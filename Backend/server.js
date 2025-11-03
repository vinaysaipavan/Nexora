const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://nexora8.netlify.app'  
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Test route - add this to check if backend is working
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Backend is working!', 
    timestamp: new Date().toISOString() 
  });
});

// Routes
app.use('/api/quotations', require('./routes/quotations'));
app.use('/api/sports-config', require('./routes/sportsConfig'));
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes.router);
app.use('/api/admin', require('./routes/admin'));
app.use('/api/pricing', require('./routes/pricing'));

// MongoDB Connection with better error handling
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get("/",(req,res)=>{
  res.send("Working bro")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);