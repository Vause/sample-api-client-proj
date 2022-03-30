'use strict';
const server = require('./server');
const config = require('./config');

module.exports = (async () => {
    server(config.app.port);
})();