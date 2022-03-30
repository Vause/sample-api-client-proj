'use strict';

const globalStore = require("../store/globalStore");

module.exports = (request, h) => {
    return h.response(globalStore);
}