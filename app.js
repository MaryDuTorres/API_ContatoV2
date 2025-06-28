const express = require('express');
const dotenv = require ('dotenv');
const conectarBanco = require('./config/db');
const contatoRoutes = require('./routes/contatoRoutes');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuarios', userRoutes); // Rotas públicas
app.use('/api/contatos', authMiddleware, contatoRoutes)

conectarBanco();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));





