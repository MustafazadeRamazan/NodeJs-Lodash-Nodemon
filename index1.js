const http = require("http");

const host = '127.0.0.1';
const port = 3000;

const simpleRequestListener = function (req, res) { 
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("My First Server!");
};
const server = http.createServer(simpleRequestListener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});