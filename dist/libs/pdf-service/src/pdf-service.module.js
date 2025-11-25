"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfServiceModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const pdf_service_1 = require("./lib/pdf-service");
let PdfServiceModule = class PdfServiceModule {
};
exports.PdfServiceModule = PdfServiceModule;
exports.PdfServiceModule = PdfServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [pdf_service_1.PdfServiceService],
        exports: [pdf_service_1.PdfServiceService],
    })
], PdfServiceModule);
//# sourceMappingURL=pdf-service.module.js.map