"use strict";
exports.__esModule = true;
exports.PharmaciesList = void 0;
// src/pages/PharmaciesList.tsx
var react_admin_1 = require("react-admin");
var Filter = [
    React.createElement(react_admin_1.TextInput, { label: "Name", source: "name", alwaysOn: true }),
    React.createElement(react_admin_1.TextInput, { label: "Address", source: "address" }),
];
exports.PharmaciesList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, { rowsPerPageOptions: [5, 10, 25] }) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "address" }),
        React.createElement(react_admin_1.TextField, { source: "contact_number" })))); };
