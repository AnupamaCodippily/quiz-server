"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorController = void 0;
const common_1 = require("@nestjs/common");
const creator_service_1 = require("./creator.service");
const create_creator_dto_1 = require("./dto/create-creator.dto");
const update_creator_dto_1 = require("./dto/update-creator.dto");
let CreatorController = class CreatorController {
    constructor(creatorService) {
        this.creatorService = creatorService;
    }
    create(createCreatorDto) {
        return this.creatorService.create(createCreatorDto);
    }
    findAll() {
        return this.creatorService.findAll();
    }
    findOne(id) {
        return this.creatorService.findOne(id);
    }
    update(id, updateCreatorDto) {
        return this.creatorService.update(id, updateCreatorDto);
    }
    remove(id) {
        return this.creatorService.remove(id);
    }
};
exports.CreatorController = CreatorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_creator_dto_1.CreateCreatorDto]),
    __metadata("design:returntype", Promise)
], CreatorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CreatorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CreatorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_creator_dto_1.UpdateCreatorDto]),
    __metadata("design:returntype", void 0)
], CreatorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CreatorController.prototype, "remove", null);
exports.CreatorController = CreatorController = __decorate([
    (0, common_1.Controller)('creator'),
    __metadata("design:paramtypes", [creator_service_1.CreatorService])
], CreatorController);
//# sourceMappingURL=creator.controller.js.map