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
// src/auth/LoginPage.tsx
var react_hook_form_1 = require("react-hook-form");
var AuthContext_1 = require("./AuthContext");
var react_router_dom_1 = require("react-router-dom");
exports.LoginPage = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var login = AuthContext_1.useAuth().login;
    var navigate = react_router_dom_1.useNavigate();
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var isSupplier, url, res, access_token, _a, payloadBase64, decoded;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    isSupplier = data.accountType === 'supplier';
                    url = isSupplier
                        ? 'http://localhost:3333/auth/supplier/signin'
                        : 'http://localhost:3333/auth/user/signin';
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email: data.email, password: data.password })
                        })];
                case 1:
                    res = _b.sent();
                    if (!res.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.json()];
                case 2:
                    access_token = (_b.sent()).access_token;
                    login(access_token);
                    _a = access_token.split('.'), payloadBase64 = _a[1];
                    decoded = JSON.parse(atob(payloadBase64));
                    if (decoded.role === 'PHARMACY_OWNER') {
                        navigate('/dashboard/owner');
                    }
                    else if (decoded.role === 'SUPPLIER_ADMIN') {
                        navigate('/dashboard/supplier');
                    }
                    return [3 /*break*/, 4];
                case 3:
                    alert('Login failed');
                    _b.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "max-w-md mx-auto mt-20 space-y-4" },
        React.createElement("select", __assign({}, register('accountType'), { className: "w-full border p-2" }),
            React.createElement("option", { value: "user" }, "Pharmacy Owner"),
            React.createElement("option", { value: "supplier" }, "Supplier Admin")),
        React.createElement("input", __assign({}, register('email'), { placeholder: "Email", className: "w-full border p-2" })),
        React.createElement("input", __assign({ type: "password" }, register('password'), { placeholder: "Password", className: "w-full border p-2" })),
        React.createElement("button", { type: "submit", className: "w-full bg-primary text-white p-2" }, "Login")));
};
