"use strict";
exports.__esModule = true;
exports.InventoryCreate = exports.InventoryEdit = exports.InventoryList = void 0;
// src/resources/inventory/index.tsx
var react_admin_1 = require("react-admin");
exports.InventoryList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "medicine.name", label: "Medicine" }),
        React.createElement(react_admin_1.TextField, { source: "location_type" }),
        React.createElement(react_admin_1.NumberField, { source: "quantity" }),
        React.createElement(react_admin_1.NumberField, { source: "cost_price" }),
        React.createElement(react_admin_1.NumberField, { source: "selling_price" }),
        React.createElement(react_admin_1.DateField, { source: "expiry_date" }),
        React.createElement(react_admin_1.DateField, { source: "last_updated" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.InventoryEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.ReferenceInput, { source: "medicine_id", reference: "medicines" }),
        React.createElement(react_admin_1.SelectInput, { source: "location_type", choices: [
                { id: 'PHARMACY', name: 'Pharmacy' },
                { id: 'WAREHOUSE', name: 'Warehouse' },
            ] }),
        React.createElement(react_admin_1.NumberInput, { source: "quantity" }),
        React.createElement(react_admin_1.NumberInput, { source: "cost_price" }),
        React.createElement(react_admin_1.NumberInput, { source: "selling_price" }),
        React.createElement(react_admin_1.DateInput, { source: "expiry_date" })))); };
exports.InventoryCreate = function () {
    var identity = react_admin_1.useGetIdentity().identity;
    return (React.createElement(react_admin_1.Create, null,
        React.createElement(react_admin_1.SimpleForm, { defaultValues: { location_type: 'PHARMACY' } },
            React.createElement(react_admin_1.ReferenceInput, { source: "medicine_id", reference: "medicines" }),
            React.createElement(react_admin_1.NumberInput, { source: "quantity" }),
            React.createElement(react_admin_1.NumberInput, { source: "cost_price" }),
            React.createElement(react_admin_1.NumberInput, { source: "selling_price" }),
            React.createElement(react_admin_1.DateInput, { source: "expiry_date" }))));
};
