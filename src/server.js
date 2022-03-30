'use strict';

const Hapi = require('@hapi/hapi');
const glob = require('glob');

module.exports = (async (port) => {
    const server = Hapi.server({
        port: port
    });

    glob.sync('./routes/*.js', { cwd: __dirname }).forEach((file) => {
        const route = require('./' + file);
        server.route(route);
        console.log(route);
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);

    process.on('unhandledRejection', (err) => {

        console.log(err);
        process.exit(1);
    });
});

