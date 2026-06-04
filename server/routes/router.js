const { Router } = require('express');
const pool = require('../db');
const bcrypt = require('bcrypt');
require('dotenv').config();

const router = Router();

const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    const resp = await pool.query("SELECT * FROM users ORDER BY id ASC")
    res.json(resp.rows);
})

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const checkUser = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    if(checkUser.rows.length > 0){
        return res.status(400).json({message: "User already exists"})
    }
    const hashedPass = await bcrypt.hash(password, 10)
    await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, hashedPass])
    res.redirect("http://localhost:5173/#/login")
})

router.post('/login', async (req, res) =>{
    const {email, password } = req.body;
    const resp = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    if(resp.rows.length === 0){
        return res.status(400).json({message: "User not found"})
    }
    const user = resp.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"})
    }
    const accessToken = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.cookie('accessToken', accessToken, { httpOnly: true, secure: false, sameSite: 'strict' , maxAge: 3600000});

    res.redirect("http://localhost:5173/#/create")
})

router.post('/create', jwtAuth, async (req, res) => {
    const {company, title, status} = req.body;
    const userId = req.user.id;
    await pool.query("INSERT INTO jobapps (company, title, status, user_id) VALUES ($1, $2, $3, $4)", [company, title, status, userId]);
    res.redirect("http://localhost:5173/#/create")
})

router.get('/jobs', jwtAuth, async (req, res) => {
    const userId = req.user.id;
    const resp = await pool.query("SELECT * FROM jobapps WHERE user_id = $1", [userId]);
    console.log(resp.rows);
    res.json(resp.rows);
})
    

function jwtAuth(req, res, next){
    const token = req.cookies.accessToken;
    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        next();
    } catch (error) {
        res.clearCookie('accessToken');
        return res.status(401).json({message: "Invalid or expired token"});
    }
}

module.exports = router;