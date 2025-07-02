const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Pretty URLs: /total → total.html, etc.
const pages = ['dashboard', 'students', 'student', 'class-fund', 'print', 'total'];
pages.forEach(page => {
  app.get('/' + page, (req, res) => {
    res.sendFile(path.join(__dirname, `${page}.html`));
  });
});

// Default route: redirect to dashboard
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
// Handle 404 errors
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});
