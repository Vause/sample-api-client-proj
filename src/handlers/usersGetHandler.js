'use strict';

const globalStore = require("../store/globalStore");
const { response200 } = require('./helpers/responseHelper');

module.exports = (request, h) => {
    return response200(h, globalStore);
}