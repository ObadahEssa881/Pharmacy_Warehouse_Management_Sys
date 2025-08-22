"use strict";
exports.__esModule = true;
exports.MedicineCreate = exports.MedicineEdit = exports.MedicineList = void 0;
// src/resources/medicines/index.tsx
var react_admin_1 = require("react-admin");
exports.MedicineList = function () { return (React.createElement(react_admin_1.List, null,
    React.createElement(react_admin_1.Datagrid, { rowClick: "edit" },
        React.createElement(react_admin_1.TextField, { source: "id" }),
        React.createElement(react_admin_1.TextField, { source: "name" }),
        React.createElement(react_admin_1.TextField, { source: "titer" }),
        React.createElement(react_admin_1.ReferenceField, { source: "category_id", reference: "categories" },
            React.createElement(react_admin_1.TextField, { source: "name" })),
        React.createElement(react_admin_1.ReferenceField, { source: "company_id", reference: "companies" },
            React.createElement(react_admin_1.TextField, { source: "name" })),
        React.createElement(react_admin_1.ReferenceField, { source: "supplier_id", reference: "suppliers" },
            React.createElement(react_admin_1.TextField, { source: "name" })),
        React.createElement(react_admin_1.NumberField, { source: "unit_price" }),
        React.createElement(react_admin_1.TextField, { source: "Type" }),
        React.createElement(react_admin_1.EditButton, null),
        React.createElement(react_admin_1.DeleteButton, null)))); };
exports.MedicineEdit = function () { return (React.createElement(react_admin_1.Edit, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "titer", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.ReferenceInput, { source: "category_id", reference: "categories" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.ReferenceInput, { source: "company_id", reference: "companies" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.ReferenceInput, { source: "supplier_id", reference: "suppliers" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.NumberInput, { source: "unit_price" }),
        React.createElement(react_admin_1.TextInput, { source: "Type" })))); };
exports.MedicineCreate = function () { return (React.createElement(react_admin_1.Create, null,
    React.createElement(react_admin_1.SimpleForm, null,
        React.createElement(react_admin_1.TextInput, { source: "name", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.TextInput, { source: "titer", validate: react_admin_1.required() }),
        React.createElement(react_admin_1.ReferenceInput, { source: "category_id", reference: "categories" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.ReferenceInput, { source: "company_id", reference: "companies" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.ReferenceInput, { source: "supplier_id", reference: "suppliers" },
            React.createElement(react_admin_1.SelectInput, { optionText: "name" })),
        React.createElement(react_admin_1.NumberInput, { source: "unit_price" }),
        React.createElement(react_admin_1.TextInput, { source: "Type" })))); };
