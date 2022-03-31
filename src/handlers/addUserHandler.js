'use strict';

const globalStore = require('../store/globalStore');
const { response201 } = require('./helpers/responseHelper');

module.exports = (request, h) => {
    try {
        globalStore.push(request.payload);
        return response201(h, request.payload);

    } catch (error) {
        throw new Error(error);
    }
}