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
exports.RegisterPage = void 0;
// src/pages/RegisterPage.tsx
var react_1 = require("react");
exports.RegisterPage = function () {
    var _a = react_1.useState({
        email: "",
        password: "",
        username: "",
        userType: "pharmacy"
    }), form = _a[0], setForm = _a[1];
    var _b = react_1.useState(""), message = _b[0], setMessage = _b[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    endpoint = form.userType === "pharmacy" ? "/auth/user/signup" : "/auth/supplier/signup";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000" + endpoint, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(form)
                        })];
                case 2:
                    res = _a.sent();
                    if (!res.ok)
                        throw new Error("Registration failed");
                    setMessage("Account created! You can now login.");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setMessage("Registration failed: " + err_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { style: { maxWidth: 400, margin: "auto", marginTop: "100px" } },
        React.createElement("h2", null, "Register"),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("select", { name: "userType", value: form.userType, onChange: handleChange },
                React.createElement("option", { value: "pharmacy" }, "Pharmacy Owner"),
                React.createElement("option", { value: "supplier" }, "Supplier Admin")),
            React.createElement("br", null),
            React.createElement("input", { type: "text", name: "username", placeholder: "Username", value: form.username, onChange: handleChange, required: true }),
            React.createElement("br", null),
            React.createElement("input", { type: "email", name: "email", placeholder: "Email", value: form.email, onChange: handleChange, required: true }),
            React.createElement("br", null),
            React.createElement("input", { type: "password", name: "password", placeholder: "Password", value: form.password, onChange: handleChange, required: true }),
            React.createElement("br", null),
            React.createElement("button", { type: "submit" }, "Register"),
            React.createElement("p", null, message))));
};
