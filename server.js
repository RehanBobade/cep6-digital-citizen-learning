const express = require('express');
const cors = require('cors');
const path = require('path');

require('./backend/server');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const frontendDir = path.join(__dirname, 'frontend');
const dataDir = path.join(__dirname, 'data');

app.get('/api/modules', (req, res) => {
  res.sendFile(path.join(dataDir, 'modules.json'));
});

app.get('/api/assessment', (req, res) => {
  res.sendFile(path.join(dataDir, 'final-assessment.json'));
});

app.use(express.static(frontendDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Digital citizenship learning portal running on http://localhost:${PORT}`);
});
