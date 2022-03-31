'use strict';

const globalStore = require("../store/globalStore");
const { response200 } = require('./helpers/responseHelper');
const { calculateLimitAndOffset, paginate } = require('paginate-info');

module.exports = (request, h) => {
    const { currentPage, pageSize } = request.query;
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const count = globalStore.length;

    const paginatedData = globalStore.slice(offset, offset + limit);
    const paginationInfo = paginate(currentPage, count, paginatedData);

    const responseObject = {
        result: paginatedData,
        metadata: paginationInfo
    }

    return response200(h, responseObject);
}