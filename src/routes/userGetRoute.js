'use strict';

const userGetHandler = require('../handlers/userGetHandler');

module.exports = {
    method: 'GET',
    path: '/user/{id}',
    options: {
        log: {
            collect: true
        }
    },
    handler: userGetHandler
};