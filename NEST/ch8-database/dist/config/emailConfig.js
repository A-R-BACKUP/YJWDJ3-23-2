"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('email', () => ({
    service: "GMAIL",
    auth: {
        user: "viewzy.com@gmail.com",
        pass: "SEXTOY123",
    },
    baseUrl: "http://loaclhost:3000",
}));
//# sourceMappingURL=emailConfig.js.map