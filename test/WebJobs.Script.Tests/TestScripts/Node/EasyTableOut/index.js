﻿module.exports = function (context, input) {
    context.log('Node.js triggered function via EasyTables called with input', input);

    context.bindings.item = {
        id: input
    };

    context.done();
}