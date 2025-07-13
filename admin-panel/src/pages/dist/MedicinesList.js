"use strict";
exports.__esModule = true;
exports.MedicinesList = void 0;
// src/pages/MedicinesList.tsx
var react_admin_1 = require("react-admin");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Name", source: "name", alwaysOn: true })];
exports.MedicinesList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "titer" }),
        React.createElement(react_admin_1.TextField, { source: "unit_price" }),
        React.createElement(react_admin_1.TextField, { source: "Type" }),
        React.createElement(react_admin_1.TextField, { source: "category_id" }),
        React.createElement(react_admin_1.TextField, { source: "company_id" })))); };
