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
exports.InventoryController = void 0;
var common_1 = require("@nestjs/common");
var InventoryController = /** @class */ (function () {
    function InventoryController(inventoryService) {
        this.inventoryService = inventoryService;
    }
    InventoryController.prototype.create = function (createInventoryDto) {
        return this.inventoryService.create(createInventoryDto);
    };
    InventoryController.prototype.findAll = function () {
        return this.inventoryService.findAll();
    };
    InventoryController.prototype.findOne = function (id) {
        return this.inventoryService.findOne(+id);
    };
    InventoryController.prototype.update = function (id, updateInventoryDto) {
        return this.inventoryService.update(+id, updateInventoryDto);
    };
    InventoryController.prototype.remove = function (id) {
        return this.inventoryService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], InventoryController.prototype, "create");
    __decorate([
        common_1.Get()
    ], InventoryController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], InventoryController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], InventoryController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], InventoryController.prototype, "remove");
    InventoryController = __decorate([
        common_1.Controller('inventory')
    ], InventoryController);
    return InventoryController;
}());
exports.InventoryController = InventoryController;
