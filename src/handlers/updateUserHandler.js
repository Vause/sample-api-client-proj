'use strict';

const globalStore = require('../store/globalStore');
const { response200, response204 } = require('./helpers/responseHelper');

module.exports = (request, h) => {

    let recordIdx = globalStore.findIndex((e) => e.id === parseInt(request.payload.id));
    if (recordIdx !== -1) {
        globalStore[recordIdx] = request.payload;
        return response200(h, globalStore[recordIdx]);
    } else {
        return response204(h);
    }

}