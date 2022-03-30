'use strict';

const deleteUserHandler = require('../handlers/deleteUserHandler');

module.exports = {
    method: 'DELETE',
    path: '/user/{id}',
    options: {
        log: {
            collect: true
        }
    },
    handler: deleteUserHandler
};