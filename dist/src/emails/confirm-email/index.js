"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sender_1 = __importDefault(require("../sender"));
exports.default = (0, sender_1.default)('confirm-email', () => `Please confirm your email address on Interval`);