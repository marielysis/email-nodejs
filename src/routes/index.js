const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, phone, mensaje } = req.body;

    contentHTML = `
        <h1>Información del cliente</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Teléfono: ${phone}</li>
            <li>Teléfono: ${mensaje}</li>
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        host: 'mail.albertopadrontrainer.com',
        port: 587,
        secure: false,
        auth: {
            user: 'prueba@albertopadrontrainer.com',
            pass: 'Morety11*'
        },
        tls: {
            rejectUnauthorized:false
        }
    });

    const info = await transporter.sendMail({
        from: '"AP Server" <prueba@albertopadrontrainer.com>',
        to: 'marielysrod11@gmail.com',
        subject: 'Formulario de clientes del teamAP',
        html: contentHTML
    });

    console.log('mensaje enviado', info.messageId);
    res.redirect('/success.html');
});

module.exports = router;