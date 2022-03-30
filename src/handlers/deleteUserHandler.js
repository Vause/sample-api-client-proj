'use strict';

const globalStore = require('../store/globalStore');
const { response200, response204 } = require('./helpers/responseHelper');

module.exports = (request, h) => {

    let recordIdx = globalStore.findIndex((e) => e.id === parseInt(request.params.id));
    if (recordIdx !== -1) {
        globalStore.splice(recordIdx, 1);
        return response200(h);
    } else {
        return response204(h);
    }
}