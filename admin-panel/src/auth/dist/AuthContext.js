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
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var AuthContext = react_1.createContext(null);
exports.AuthProvider = function (_a) {
    var _b, _c, _d, _e;
    var children = _a.children;
    var _f = react_1.useState(localStorage.getItem('token')), token = _f[0], setToken = _f[1];
    var _g = react_1.useState(null), payload = _g[0], setPayload = _g[1];
    /* Decode JWT whenever token changes */
    react_1.useEffect(function () {
        if (!token) {
            setPayload(null);
            return;
        }
        var _a = token.split('.'), payloadBase64 = _a[1];
        setPayload(JSON.parse(atob(payloadBase64)));
    }, [token]);
    /* ---- login ---- */
    var login = function (_a) {
        var email = _a.email, password = _a.password, type = _a.type;
        return __awaiter(void 0, void 0, void 0, function () {
            var url, res, access_token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = type === 'supplier'
                            ? 'http://localhost:3333/auth/supplier/signin'
                            : 'http://localhost:3333/auth/user/signin';
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ email: email, password: password })
                            })];
                    case 1:
                        res = _b.sent();
                        if (!res.ok)
                            throw new Error('Invalid credentials');
                        return [4 /*yield*/, res.json()];
                    case 2:
                        access_token = (_b.sent()).access_token;
                        localStorage.setItem('token', access_token);
                        setToken(access_token); // will trigger effect above
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ---- logout ---- */
    var logout = function () {
        localStorage.removeItem('token');
        setToken(null);
        setPayload(null);
    };
    return (React.createElement(AuthContext.Provider, { value: {
            token: token,
            role: (_b = payload === null || payload === void 0 ? void 0 : payload.role) !== null && _b !== void 0 ? _b : null,
            pharmacy_id: (_c = payload === null || payload === void 0 ? void 0 : payload.pharmacy_id) !== null && _c !== void 0 ? _c : null,
            warehouse_id: (_d = payload === null || payload === void 0 ? void 0 : payload.warehouse_id) !== null && _d !== void 0 ? _d : null,
            type: (_e = payload === null || payload === void 0 ? void 0 : payload.type) !== null && _e !== void 0 ? _e : null,
            login: login,
            logout: logout
        } }, children));
};
exports.useAuth = function () { return react_1.useContext(AuthContext); };
