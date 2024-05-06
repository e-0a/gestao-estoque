/**
 *
 * Arquivo responsável pela chamada da API na aplicação no lado do Backend
 * 
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Bem-vindo a API Nodejs',
        version: '1.0.0'
    });
});