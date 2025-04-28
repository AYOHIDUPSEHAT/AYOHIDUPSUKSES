const express = require('express');
const router = express.Router();

const users = [];

router.post('/topup', (req, res) => {
    const { email, amount } = req.body;
    const user = users.find(u => u.email === email);
    if (user) {
        user.saldo += amount;
        res.json({ message: 'Top Up sukses', saldo: user.saldo });
    } else {
        res.status(404).json({ message: 'User tidak ditemukan' });
    }
});

module.exports = router;
