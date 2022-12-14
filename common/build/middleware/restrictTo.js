"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictTo = void 0;
var notAuthorized_1 = require("../errors/notAuthorized");
var restrictTo = function () {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return function (req, res, next) {
        if (!roles.includes(req.user.role)) {
            return next(new notAuthorized_1.NotAuthorizedError());
        }
        next();
    };
};
exports.restrictTo = restrictTo;
