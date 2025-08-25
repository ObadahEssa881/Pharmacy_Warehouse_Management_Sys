"use strict";
exports.__esModule = true;
exports.PurchaseOrderItemEdit = exports.PurchaseOrderItemCreate = exports.PurchaseOrderItemList = void 0;
var react_admin_1 = require("react-admin");
exports.PurchaseOrderItemList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.NumberField, { source: "id" }),
        React.createElement(react_admin_1.NumberField, { source: "order_id" }),
        React.createElement(react_admin_1.NumberField, { source: "medicine_id" }),
        React.createElement(react_admin_1.NumberField, { source: "quantity" }),
        React.createElement(react_admin_1.NumberField, { source: "unit_price" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.PurchaseOrderItemCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.NumberInput, { source: "order_id", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "medicine_id", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "quantity", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.NumberInput, { source: "unit_price", validate: react_admin_1.required() })))); };
exports.PurchaseOrderItemEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.NumberInput, { source: "quantity" }),
        React.createElement(react_admin_1.NumberInput, { source: "unit_price" })))); };
