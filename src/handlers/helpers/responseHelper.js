'use strict';

const _formattedResponse = (h, responseObject, code) => {
    return h.response(responseObject).code(code);
}

const response200 = (h, responseObject) => {
    return _formattedResponse(h, responseObject, 200);
};

const response201 = (h, responseObject) => {
    return _formattedResponse(h, responseObject, 201);
};

const response204 = (h, responseObect) => {
    return _formattedResponse(h, responseObect, 201);
};

module.exports = {
    response200,
    response201,
    response204
}