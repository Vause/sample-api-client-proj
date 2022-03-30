'use strict';

const globalStore = require('../store/globalStore');
const { response201 } = require('./helpers/responseHelper');


module.exports = (request, h) => {
    globalStore.push(request.payload);

    const responseObject = {
        message: `Inserting ID ${request.payload.id}`
    };

    return response201(h, responseObject);
}