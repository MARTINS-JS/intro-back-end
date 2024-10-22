const express = require('express')
const server = express()
const PORT = 5000; // Defined port
// Define a simple route
server.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Additional routes
server.get('/about', (req, res) => {
    res.send('This is the About page.');
});

server.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});


// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
