"use strict";
exports.__esModule = true;
exports.TwTable = void 0;
var ra_core_1 = require("ra-core");
exports.TwTable = function (_a) {
    var _b;
    var resource = _a.resource, columns = _a.columns;
    var controller = ra_core_1.useListController({ resource: resource });
    if (controller.isLoading)
        return React.createElement("p", null, "Loading...");
    if (!((_b = controller.data) === null || _b === void 0 ? void 0 : _b.length))
        return React.createElement("p", null, "No records.");
    return (React.createElement("div", { className: "overflow-x-auto rounded-lg shadow" },
        React.createElement("table", { className: "min-w-full bg-white" },
            React.createElement("thead", { className: "bg-primary text-white" },
                React.createElement("tr", null, columns.map(function (col) { return (React.createElement("th", { key: col.source, className: "px-4 py-2 text-left" }, col.label)); }))),
            React.createElement("tbody", null, controller.data.map(function (record) { return (React.createElement("tr", { key: record.id, className: "odd:bg-gray-50 hover:bg-indigo-50 transition" }, columns.map(function (col) { return (React.createElement("td", { key: col.source, className: "px-4 py-2" }, record[col.source])); }))); })))));
};
