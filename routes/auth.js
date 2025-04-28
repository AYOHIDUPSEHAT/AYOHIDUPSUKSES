const express = require('express');
const router = express.Router();

const users = [];

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    users.push({ email, password, saldo: 0 });
    res.json({ message: 'Register sukses' });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: 'Login sukses', user });
    } else {
        res.status(401).json({ message: 'Login gagal' });
    }
});

module.exports = router;
