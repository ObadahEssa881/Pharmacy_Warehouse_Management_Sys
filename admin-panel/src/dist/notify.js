"use strict";
exports.__esModule = true;
exports.useNotify = void 0;
// src/notify.ts
var notistack_1 = require("notistack");
exports.useNotify = function () {
    var enqueueSnackbar = notistack_1.useSnackbar().enqueueSnackbar;
    return {
        notifySuccess: function (msg) {
            return enqueueSnackbar(msg, { variant: 'success' });
        },
        notifyError: function (msg) { return enqueueSnackbar(msg, { variant: 'error' }); }
    };
};
