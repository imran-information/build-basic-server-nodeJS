import http, { IncomingMessage, Server, ServerResponse } from "http";

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.end(
        JSON.stringify({
            message: "Hello from node js with typescript...",
            path: req.url,
        }
        )
    )
})

server.listen(5000, () => {
    console.log(`server is running on port ${5000}`);
})