"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.JwtStrategy = void 0;
var passport_jwt_1 = require("passport-jwt");
var passport_1 = require("@nestjs/passport");
var common_1 = require("@nestjs/common");
var JwtStrategy = /** @class */ (function (_super) {
    __extends(JwtStrategy, _super);
    function JwtStrategy(config, prisma) {
        var _this = this;
        var options = {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET', 'fallback-secret')
        };
        _this = _super.call(this, options) || this;
        _this.config = config;
        _this.prisma = prisma;
        return _this;
    }
    JwtStrategy.prototype.validate = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, password_hash, rest, supplier, password_hash, rest, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(payload.type === 'user')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prisma.user.findUnique({
                                where: { id: payload.id }
                            })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            password_hash = user.password_hash, rest = __rest(user, ["password_hash"]);
                            return [2 /*return*/, __assign(__assign({}, rest), { role: payload.role, type: 'user', pharmacy_id: payload.pharmacy_id, warehouse_id: payload.warehouse_id })];
                        }
                        _a.label = 2;
                    case 2:
                        if (!(payload.type === 'supplier')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.prisma.supplier.findUnique({
                                where: { id: payload.id }
                            })];
                    case 3:
                        supplier = _a.sent();
                        if (supplier) {
                            password_hash = supplier.password_hash, rest = __rest(supplier, ["password_hash"]);
                            return [2 /*return*/, __assign(__assign({}, rest), { id: payload.id, email: payload.email, role: payload.role, type: 'supplier', warehouse_id: payload.warehouse_id })];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, null];
                    case 5:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    JwtStrategy = __decorate([
        common_1.Injectable()
    ], JwtStrategy);
    return JwtStrategy;
}(passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt')));
exports.JwtStrategy = JwtStrategy;
