const { Router } = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');

const router = Router();

router.get('/', async (req, res) => {
    const resp = await pool.query("SELECT * FROM users ORDER BY id ASC")
    res.json(resp.rows);
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPass = await bcrypt.hash(this.toString(password), 10)
    await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, hashedPass])
    res.redirect("http://localhost:5173/#/login")
})

router.post('/login', async (req, res) =>{
    const { name, email, password } = req.body;
})

module.exports = router;