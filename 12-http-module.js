// http module

// Importing the http module
const http = require('http');
const PORT = 4000;

// Create a server
const server = http.createServer((req, res) => {
    // Set a default content-type header for all responses
    res.setHeader('Content-Type', 'text/html');

    // Route for home page
    if (req.url === "/") {
        res.writeHead(200);  // Send a 200 status for OK
        res.end("<h1>Home Page</h1><p>Welcome to the home page.</p>");
    } 
    // Route for about page
    else if (req.url === "/about") {
        res.writeHead(200);  // Send a 200 status for OK
        res.end("<h1>About Page</h1><p>This is the about page.</p>");
    } 
    // Route for not found (404)
    else {
        res.writeHead(404);  // Send a 404 status for Not Found
        res.end(`
            <h1>404 - Not Found</h1>
            <p>Sorry, we can't seem to find the page you're looking for.</p>
            <a href="/">Go back to the home page</a>
        `);
    }
});

// Start the server and listen on the given port
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
