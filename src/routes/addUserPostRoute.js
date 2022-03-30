'use strict';

const addUserHandler = require('../handlers/addUserHandler');

module.exports = {
    method: 'POST',
    path: '/user',
    options: {
        log: {
            collect: true
        }
    },
    handler: addUserHandler
};