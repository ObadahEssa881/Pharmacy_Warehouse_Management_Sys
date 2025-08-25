"use strict";
exports.__esModule = true;
exports.InventoryEdit = exports.InventoryCreate = void 0;
var react_admin_1 = require("react-admin");
var Fields = function () { return (React.createElement(React.Fragment, null,
    React.createElement(react_admin_1.TextInput, { source: "medicine_id" }),
    React.createElement(react_admin_1.NumberInput, { source: "quantity" }),
    React.createElement(react_admin_1.SelectInput, { source: "location_type", choices: [
            { id: 'PHARMACY', name: 'PHARMACY' },
            { id: 'WAREHOUSE', name: 'WAREHOUSE' },
        ] }),
    React.createElement(react_admin_1.NumberInput, { source: "cost_price" }),
    React.createElement(react_admin_1.NumberInput, { source: "selling_price" }),
    React.createElement(react_admin_1.DateInput, { source: "expiry_date" }),
    React.createElement(react_admin_1.TextInput, { source: "pharmacy_id" }),
    React.createElement(react_admin_1.TextInput, { source: "warehouse_id" }))); };
exports.InventoryCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
exports.InventoryEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(Fields, null)))); };
