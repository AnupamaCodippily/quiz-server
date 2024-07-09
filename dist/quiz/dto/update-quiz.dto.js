"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuizDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_quiz_dto_1 = require("./create-quiz.dto");
class UpdateQuizDto extends (0, mapped_types_1.PartialType)(create_quiz_dto_1.CreateQuizDto) {
}
exports.UpdateQuizDto = UpdateQuizDto;
//# sourceMappingURL=update-quiz.dto.js.map