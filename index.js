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
// 2. Updated Data API (Cars with Photos)
app.get('/cars', (req, res) => {
    res.json([
        { 
            id: 1, 
            model: 'Model S', 
            brand: 'Tesla', 
            year: 2024, 
            type: 'Electric',
            imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000' 
        },
        { 
            id: 2, 
            model: '911 GT3', 
            brand: 'Porsche', 
            year: 2023, 
            type: 'Sport',
            imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000'
        },
        { 
            id: 3, 
            model: 'Mustang Mach-1', 
            brand: 'Ford', 
            year: 1969, 
            type: 'Muscle',
            imageUrl: 'https://images.unsplash.com/photo-1540647853907-b5906ff40880?auto=format&fit=crop&q=80&w=1000'
        },
        { 
            id: 4, 
            model: 'G-Wagon', 
            brand: 'Mercedes', 
            year: 2022, 
            type: 'SUV',
            imageUrl: 'https://images.unsplash.com/photo-1700884575668-8c0666c39825?auto=format&fit=crop&q=80&w=1000'
        },
        { 
            id: 5, 
            model: 'Supra MK4', 
            brand: 'Toyota', 
            year: 1998, 
            type: 'JDM',
            imageUrl: 'https://images.unsplash.com/photo-1603811478700-7590182b6abb?auto=format&fit=crop&q=80&w=1000'
        },
        { 
            id: 6, 
            model: 'Aventador', 
            brand: 'Lamborghini', 
            year: 2021, 
            type: 'Supercar',
            imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1000'
        }
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