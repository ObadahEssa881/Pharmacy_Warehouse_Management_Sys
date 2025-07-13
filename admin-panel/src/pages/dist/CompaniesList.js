"use strict";
exports.__esModule = true;
exports.CompaniesList = void 0;
// src/pages/CompaniesList.tsx
var react_admin_1 = require("react-admin");
var Filter = [React.createElement(react_admin_1.TextInput, { label: "Company Name", source: "name", alwaysOn: true })];
exports.CompaniesList = function () { return (React.createElement(react_admin_1.List, { filters: Filter, perPage: 10, pagination: React.createElement(react_admin_1.Pagination, null) },
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "contact_person" }),
        React.createElement(react_admin_1.TextField, { source: "email" }),
        React.createElement(react_admin_1.TextField, { source: "phone" }),
        React.createElement(react_admin_1.TextField, { source: "address" })))); };
