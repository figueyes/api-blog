import server from './shared/infrastructure/config/server';
const PORT: number | string = process.env.PORT_SERVER || 3000;

server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})