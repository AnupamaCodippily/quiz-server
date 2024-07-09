"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorModule = void 0;
const common_1 = require("@nestjs/common");
const creator_service_1 = require("./creator.service");
const creator_controller_1 = require("./creator.controller");
const mongoose_1 = require("@nestjs/mongoose");
const creator_schema_1 = require("./schemas/creator.schema");
let CreatorModule = class CreatorModule {
};
exports.CreatorModule = CreatorModule;
exports.CreatorModule = CreatorModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: creator_schema_1.Creator.name, schema: creator_schema_1.CreatorSchema }])],
        controllers: [creator_controller_1.CreatorController],
        providers: [creator_service_1.CreatorService],
    })
], CreatorModule);
//# sourceMappingURL=creator.module.js.map