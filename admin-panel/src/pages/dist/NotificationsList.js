"use strict";
exports.__esModule = true;
exports.NotificationsList = void 0;
var Table_1 = require("../components/tw/Table");
exports.NotificationsList = function () { return (React.createElement(React.Fragment, null,
    React.createElement("h1", { className: "text-2xl font-semibold mb-4" }, "Notifications"),
    React.createElement(Table_1.TwTable, { resource: "notifications", columns: [
            { source: 'id', label: 'ID' },
            { source: 'user_id', label: 'User' },
            { source: 'message', label: 'Message' },
            { source: 'type', label: 'Type' },
            { source: 'created_at', label: 'Created' },
            { source: 'is_read', label: 'Read' },
        ] }))); };
