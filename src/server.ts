import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('server is running....');
    // get end point
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { 'content-type': "application/json" });
        res.end(
            JSON.stringify({
                message: "Hello from node js with typescript...",
                path: req.url,
            })
        )
    }
    // api route
    if (req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { 'content-type': "application/json" });
        res.end(
            JSON.stringify({
                message: "Health status ok...",
                path: req.url,
            })
        )
    }

    // users route
    if (req.url === "/api/users" && req.method === "POST") {
        // const user = {
        //     id: 1,
        //     name: 'imran'
        // }
        // res.writeHead(200, { 'content-type': "application/json" });
        // res.end(
        //     JSON.stringify(user)
        // )
        let bodyUserData = '';

        req.on("data", (chunk) => {
            bodyUserData += chunk.toString();
        });

        req.on("end", () => {
            const parsBodyData = JSON.parse(bodyUserData)
            console.log(parsBodyData);
            res.end(JSON.stringify(parsBodyData));
        })

    }
})



server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
})