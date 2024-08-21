const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para obter avatar url
const botToken = 'MTI3NTg2ODkzMTU3MTA2MDgwOQ.GA9Tcv.FgA5ltt0qVRSTvGgEup2T8zx_rQquyFBxsn7Hk';

app.get('/avatar/:userId', async (req, res) => {
    const userId = req.params.userId;
    const url = `https://discord.com/api/v10/users/${userId}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bot ${botToken}`
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: response.statusText });
        }

        const data = await response.json();
        const avatarHash = data.avatar;

        if (!avatarHash) {
            return res.status(404).json({ error: 'User does not have an avatar set.' });
        }

        const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
        res.json({ avatarUrl });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});