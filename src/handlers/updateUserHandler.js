'use strict';

const globalStore = require('../store/globalStore');

module.exports = (request, h) => {

    let recordIdx = globalStore.findIndex((e) => e.id === parseInt(request.payload.id));
    if (recordIdx !== -1) {
        globalStore[recordIdx] = request.payload;
    } else {
        globalStore.push(request.payload);
        recordIdx = globalStore.length - 1;
    }

    return h.response(globalStore[recordIdx]);

}