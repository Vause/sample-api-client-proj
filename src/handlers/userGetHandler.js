'use strict';

const globalStore = require('../store/globalStore');
const { response200 } = require('./helpers/responseHelper');

module.exports = (request, h) => {

    let ret;

    const id = parseInt(request.params.id);

    const cache = new Map();
    if (cache.has(id)) {
        ret = cache.get(id);
    } else {
        ret = globalStore.find((e) => e.id === id);
        cache.set(id, ret);
    }

    return response200(h, ret);
}