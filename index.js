const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// 1. Login API (Keeping the same credentials for simplicity)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'student' && password === 'password123') {
        res.json({ success: true, token: 'car-token-999', name: 'Car Enthusiast' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// 2. Updated Data API (Cars)
app.get('/cars', (req, res) => {
    res.json([
        { id: 1, model: 'Tesla Model S', brand: 'Tesla', year: 2024, type: 'Electric' },
        { id: 2, model: 'Mustang GT', brand: 'Ford', year: 1969, type: 'Muscle' },
        { id: 3, model: '911 Carrera', brand: 'Porsche', year: 2023, type: 'Sport' },
        { id: 4, model: 'Civic Type R', brand: 'Honda', year: 2022, type: 'Hatchback' }
    ]);
});

// 3. Profile API
app.get('/profile', (req, res) => {
    res.json({ 
        name: 'Student Developer', 
        email: 'speed-racer@example.com', 
        favoriteCategory: 'Supercars' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Car API running on port ${PORT}`));