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
var client_1 = require("@prisma/client");
var category_seed_1 = require("./category.seed");
var company_seed_1 = require("./company.seed");
var medicine_seed_1 = require("./medicine.seed");
var argon = require("argon2");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var pharmacy1, passwordHash, warehouse1, supplier1, category, company, medicine1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('Seeding database...');
                    return [4 /*yield*/, prisma.pharmacy.create({
                            data: {
                                name: 'Central Pharmacy',
                                address: '123 Main St',
                                contact_number: '123456789'
                            }
                        })];
                case 1:
                    pharmacy1 = _a.sent();
                    return [4 /*yield*/, argon.hash('password123')];
                case 2:
                    passwordHash = _a.sent();
                    return [4 /*yield*/, prisma.user.createMany({
                            data: [
                                {
                                    username: 'owner1',
                                    email: 'owner1@pharma.com',
                                    password_hash: passwordHash,
                                    role: client_1.UserRole.PHARMACY_OWNER,
                                    pharmacy_id: pharmacy1.id
                                },
                                {
                                    username: 'pharmacist1',
                                    email: 'pharmacist1@pharma.com',
                                    password_hash: passwordHash,
                                    role: client_1.UserRole.PHARMACIST,
                                    pharmacy_id: pharmacy1.id
                                },
                            ]
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.warehouse.create({
                            data: {
                                name: 'Main Warehouse',
                                address: '456 Warehouse Rd',
                                contact_number: '987654321'
                            }
                        })];
                case 4:
                    warehouse1 = _a.sent();
                    return [4 /*yield*/, prisma.supplier.create({
                            data: {
                                name: 'Best Supplier',
                                email: 'supplier@warehouse.com',
                                password_hash: passwordHash,
                                role: client_1.SupplierRole.SUPPLIER_ADMIN,
                                contact_person: 'John Doe',
                                phone: '555555555',
                                address: '789 Supplier Ave',
                                warehouseId: warehouse1.id
                            }
                        })];
                case 5:
                    supplier1 = _a.sent();
                    return [4 /*yield*/, prisma.category.create({
                            data: { name: 'Painkillers', description: 'Pain relief medicines' }
                        })];
                case 6:
                    category = _a.sent();
                    return [4 /*yield*/, prisma.company.create({
                            data: {
                                name: 'HealthCorp',
                                contact_person: 'Alice',
                                phone: '444444444',
                                email: 'contact@healthcorp.com',
                                address: '101 Pharma St'
                            }
                        })];
                case 7:
                    company = _a.sent();
                    return [4 /*yield*/, prisma.medicine.create({
                            data: {
                                name: 'Paracetamol',
                                titer: '500mg',
                                category_id: category.id,
                                company_id: company.id,
                                unit_price: 5.0,
                                supplier_id: supplier1.id,
                                Type: 'Tablet'
                            }
                        })];
                case 8:
                    medicine1 = _a.sent();
                    // Inventory
                    return [4 /*yield*/, prisma.inventory.create({
                            data: {
                                medicine_id: medicine1.id,
                                location_type: client_1.LocationType.PHARMACY,
                                quantity: 100,
                                cost_price: 3.5,
                                selling_price: 5.0,
                                expiry_date: new Date('2026-12-31'),
                                pharmacy_id: pharmacy1.id
                            }
                        })];
                case 9:
                    // Inventory
                    _a.sent();
                    // Purchase Order
                    return [4 /*yield*/, prisma.purchaseOrder.create({
                            data: {
                                supplier_id: supplier1.id,
                                pharmacy_id: pharmacy1.id,
                                status: 'DELIVERED',
                                PurchaseOrderItems: {
                                    create: [{ medicine_id: medicine1.id, quantity: 50, unit_price: 3.5 }]
                                }
                            }
                        })];
                case 10:
                    // Purchase Order
                    _a.sent();
                    // Sale
                    return [4 /*yield*/, prisma.sale.create({
                            data: {
                                pharmacy_id: pharmacy1.id,
                                customer_name: 'Jane Doe',
                                total_amount: 50.0,
                                payment_mode: 'CASH',
                                SaleItems: {
                                    create: [
                                        {
                                            medicine_id: medicine1.id,
                                            quantity: 10,
                                            unit_price: 5.0,
                                            cost_price: 3.5
                                        },
                                    ]
                                }
                            }
                        })];
                case 11:
                    // Sale
                    _a.sent();
                    console.log('✅ Seeding completed!');
                    return [4 /*yield*/, category_seed_1.seedCategories(prisma)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, company_seed_1.seedCompanies(prisma)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, medicine_seed_1.seedMedicines(prisma)];
                case 14:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
