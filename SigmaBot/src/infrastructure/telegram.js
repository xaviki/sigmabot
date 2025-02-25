"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
require("../config/env");
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const env_1 = require("../config/env");
exports.bot = new node_telegram_bot_api_1.default(env_1.config.TELEGRAM_BOT_TOKEN, { polling: true });
exports.bot.on('message', (msg) => {
    console.log(`[DEBUG] Received message: "${msg.text}" from Chat ID: ${msg.chat.id}`);
});
