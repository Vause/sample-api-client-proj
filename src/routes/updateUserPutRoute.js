'use strict';

const updateUserHandler = require('../handlers/updateUserHandler');

module.exports = {
    method: 'PUT',
    path: '/user',
    options: {
        log: {
            collect: true
        }
    },
    handler: updateUserHandler
};