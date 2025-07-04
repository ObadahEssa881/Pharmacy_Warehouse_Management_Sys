"use strict";
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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hi_1 = require("react-icons/hi"); // 👈 fixed import
var AuthContext_1 = require("../auth/AuthContext");
exports.LoginPage = function () {
    var login = AuthContext_1.useAuth().login;
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState('user'), type = _c[0], setType = _c[1];
    var _d = react_1.useState(''), error = _d[0], setError = _d[1];
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    setError('');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, login({ email: email, password: password, type: type })];
                case 2:
                    _b.sent();
                    navigate('/');
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    setError('Invalid email or password');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "flex items-center justify-center h-screen bg-gray-100" },
        React.createElement("div", { className: "w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md" },
            React.createElement("h2", { className: "text-2xl font-bold text-center text-primary" }, "PharmaSys Login"),
            React.createElement("form", { className: "space-y-4", onSubmit: handleLogin },
                React.createElement("div", null,
                    React.createElement("label", { className: "block mb-1 font-medium text-gray-700" }, "Email"),
                    React.createElement("div", { className: "relative" },
                        hi_1.HiMail({ className: 'absolute top-3 left-3 text-gray-400' }),
                        React.createElement("input", { type: "email", required: true, value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "you@example.com" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "block mb-1 font-medium text-gray-700" }, "Password"),
                    React.createElement("div", { className: "relative" },
                        hi_1.HiLockClosed({ className: 'absolute top-3 left-3 text-gray-400' }),
                        React.createElement("input", { type: "password", required: true, value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }))),
                React.createElement("div", null,
                    React.createElement("label", { className: "block mb-1 font-medium text-gray-700" }, "Login as"),
                    React.createElement("select", { value: type, onChange: function (e) { return setType(e.target.value); }, className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" },
                        React.createElement("option", { value: "user" }, "Pharmacy Owner"),
                        React.createElement("option", { value: "supplier" }, "Supplier Admin"))),
                error && React.createElement("p", { className: "text-sm text-red-600" }, error),
                React.createElement("button", { type: "submit", className: "w-full py-2 text-white bg-primary hover:bg-primary-dark rounded-md transition" }, "Sign In")))));
};
