const express = require('express');
const { Client } = require('discord.js-selfbot-v13');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. FAUX SERVEUR WEB (Pour Render)
app.get('/', (req, res) => {
  res.send('Compte Discord maintenu en ligne');
});

app.listen(PORT, () => {
  console.log(`Serveur web actif sur le port ${PORT}`);
});

// 2. CONNEXION DU COMPTE
const client = new Client({
  checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`Connecte avec succes sur : ${client.user.tag}`);
  console.log('Vos parametres et votre statut actuels sont conserves.');
});

// 3. CONNEXION AVEC LE TOKEN
client.login(process.env.TOKEN);