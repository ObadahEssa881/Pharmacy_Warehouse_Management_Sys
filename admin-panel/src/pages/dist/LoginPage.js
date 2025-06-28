"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.LoginPage = void 0;
// src/pages/LoginPage.tsx
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
exports.LoginPage = function () {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState({ email: '', password: '', userType: 'pharmacy' }), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState(''), error = _b[0], setError = _b[1];
    var handleChange = function (changed) {
        setFormData(function (prev) { return (__assign(__assign({}, prev), changed)); });
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, res, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = formData.userType === 'pharmacy' ? '/auth/user/signin' : '/auth/supplier/signin';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:3333" + endpoint, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: formData.email, password: formData.password })
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error('Invalid credentials');
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    localStorage.setItem('token', data.access_token);
                    navigate('/');
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    setError(err_1.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' } },
        React.createElement(antd_1.Card, { title: "Pharmacy Admin Login", style: { width: 400, boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)' } },
            React.createElement(antd_1.Form, { layout: "vertical", onFinish: handleSubmit },
                React.createElement(antd_1.Form.Item, { label: "Login As" },
                    React.createElement(antd_1.Select, { value: formData.userType, onChange: function (val) { return handleChange({ userType: val }); }, options: [
                            { value: 'pharmacy', label: 'Pharmacy Owner' },
                            { value: 'supplier', label: 'Supplier Admin' },
                        ] })),
                React.createElement(antd_1.Form.Item, { label: "Email", required: true },
                    React.createElement(antd_1.Input, { type: "email", value: formData.email, onChange: function (e) { return handleChange({ email: e.target.value }); } })),
                React.createElement(antd_1.Form.Item, { label: "Password", required: true },
                    React.createElement(antd_1.Input.Password, { value: formData.password, onChange: function (e) { return handleChange({ password: e.target.value }); } })),
                React.createElement(antd_1.Form.Item, null,
                    React.createElement(antd_1.Button, { type: "primary", htmlType: "submit", block: true }, "Login")),
                error && React.createElement(antd_1.Typography.Text, { type: "danger" }, error)))));
};
