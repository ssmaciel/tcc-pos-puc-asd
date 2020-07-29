import server from './server';

server.listen(3003, () => {
    console.log(`[SERVER D] Running at http://localhost:3003`);
});