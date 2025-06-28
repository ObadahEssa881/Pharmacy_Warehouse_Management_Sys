"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MedicineController = void 0;
var common_1 = require("@nestjs/common");
var MedicineController = /** @class */ (function () {
    function MedicineController(medicineService) {
        this.medicineService = medicineService;
    }
    MedicineController.prototype.create = function (dto) {
        return this.medicineService.create(dto);
    };
    MedicineController.prototype.findAll = function (page, limit) {
        if (page === void 0) { page = '1'; }
        if (limit === void 0) { limit = '10'; }
        return this.medicineService.findAll(+page, +limit);
    };
    MedicineController.prototype.findOne = function (id) {
        return this.medicineService.findOne(id);
    };
    MedicineController.prototype.update = function (id, dto) {
        return this.medicineService.update(id, dto);
    };
    MedicineController.prototype.remove = function (id) {
        return this.medicineService.remove(id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], MedicineController.prototype, "create");
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query('page')), __param(1, common_1.Query('limit'))
    ], MedicineController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], MedicineController.prototype, "findOne");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe)),
        __param(1, common_1.Body())
    ], MedicineController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id', common_1.ParseIntPipe))
    ], MedicineController.prototype, "remove");
    MedicineController = __decorate([
        common_1.Controller('medicines')
    ], MedicineController);
    return MedicineController;
}());
exports.MedicineController = MedicineController;
