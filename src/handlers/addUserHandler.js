'use strict';

const globalStore = require('../store/globalStore');

module.exports = (request, h) => {
    globalStore.push(request.payload);

    return h.response({
        message: `Inserting ID ${request.payload.id}`
    }).code(201);
}