'use strict';

const usersGetHandler = require('../handlers/usersGetHandler');

module.exports = {
    method: 'GET',
    path: '/users',
    handler: usersGetHandler
};