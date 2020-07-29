import express from "express";

const server = express();

server.get("/", (_, res) => {
    res.send("Hello ts-node! 3003");
});

export default server;