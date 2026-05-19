import http from 'http';

const PORT: number = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Please choose another port.`);
    } else {
        console.error(`Server error: ${err.message}`);
    }
});