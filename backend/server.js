const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const dataDir = path.join(__dirname, 'data');
const usersFile = path.join(dataDir, 'users.json');
const resultsFile = path.join(dataDir, 'results.json');

function ensureJsonFile(filePath, defaultValue) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2));
  }
}

function readJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    if (!raw.trim()) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

ensureJsonFile(usersFile, []);
ensureJsonFile(resultsFile, []);

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.post('/api/register', (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body || {};

    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const trimmedName = String(fullName).trim();
    const trimmedEmail = String(email).trim().toLowerCase();

    if (!trimmedName) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match.' });
    }

    const users = readJson(usersFile, []);
    const existingUser = users.find((user) => String(user.email || '').toLowerCase() === trimmedEmail);

    if (existingUser) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    const newUser = {
      id: Date.now(),
      name: trimmedName,
      fullName: trimmedName,
      email: trimmedEmail,
      password,
      hasLoggedIn: false
    };

    users.push(newUser);
    writeJson(usersFile, users);

    const safeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };

    return res.status(201).json({ success: true, message: 'Registration successful.', user: safeUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const trimmedEmail = String(email).trim().toLowerCase();
    const users = readJson(usersFile, []);
    const foundUser = users.find((user) => String(user.email || '').toLowerCase() === trimmedEmail && user.password === password);

    if (!foundUser) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const isNewUser = foundUser.hasLoggedIn === false;
    foundUser.hasLoggedIn = true;
    writeJson(usersFile, users);

    const safeUser = {
      id: foundUser.id,
      name: foundUser.name || foundUser.fullName,
      email: foundUser.email,
      isNewUser
    };

    return res.json({ success: true, message: 'Login successful.', user: safeUser });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server error during login.' });
  }
});

app.post('/api/quiz-result', (req, res) => {
  const { userId, userEmail, module, score, percentage, correct, incorrect, unanswered, completedAt } = req.body || {};
  const validModules = ['digilocker', 'aadhaar', 'pan', 'digital-safety'];

  if (!Number.isInteger(Number(userId)) || !userEmail || !validModules.includes(module)) {
    return res.status(400).json({ success: false, message: 'Valid user and module details are required.' });
  }

  if (!Number.isFinite(Number(score)) || !Number.isFinite(Number(percentage)) || Number(score) < 0 || Number(percentage) < 0 || Number(percentage) > 100) {
    return res.status(400).json({ success: false, message: 'A valid quiz score and percentage are required.' });
  }

  const results = readJson(resultsFile, []);
  results.push({
    userId: Number(userId),
    userEmail: String(userEmail).trim().toLowerCase(),
    module,
    score: Number(score),
    percentage: Number(percentage),
    correct: Number(correct || 0),
    incorrect: Number(incorrect || 0),
    unanswered: Number(unanswered || 0),
    completedAt: completedAt || new Date().toISOString()
  });

  writeJson(resultsFile, results);

  return res.json({ success: true, message: 'Quiz result saved.' });
});

app.get('/api/quiz-results/:userId', (req, res) => {
  const userId = Number(req.params.userId);
  if (!Number.isInteger(userId) || userId < 1) {
    return res.status(400).json({ success: false, message: 'A valid user ID is required.' });
  }

  const results = readJson(resultsFile, []).filter((result) => Number(result.userId) === userId);
  return res.json({ success: true, results });
});

app.listen(PORT, () => {
  console.log(`CEP backend running at http://localhost:${PORT}`);
});
