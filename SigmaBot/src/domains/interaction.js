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
Object.defineProperty(exports, "__esModule", { value: true });
const telegram_1 = require("../infrastructure/telegram");
const data_1 = require("./data"); // ✅ Now correctly imports
const message_1 = require("./message"); // ✅ Now correctly imports
telegram_1.bot.onText(/\/latest/, (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const chatId = msg.chat.id;
    const latestRaise = yield (0, data_1.fetchLatestRaise)();
    if (latestRaise) {
        const message = (0, message_1.formatRaiseMessage)(latestRaise);
        telegram_1.bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    }
    else {
        telegram_1.bot.sendMessage(chatId, "⚠️ Could not fetch the latest VC raise. Try again later.");
    }
}));
