"use strict";
exports.__esModule = true;
exports.CategoriesList = void 0;
// src/pages/CategoriesList.tsx
var react_admin_1 = require("react-admin");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Name", source: "name", alwaysOn: true })];
exports.CategoriesList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "description" })))); };
