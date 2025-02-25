"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRaiseMessage = formatRaiseMessage;
function formatRaiseMessage(raise) {
    return `🚀 *${raise.companyName}* just raised **$${raise.raisedAmount}M** in the *${raise.sector}* sector!\n\nInterested? Click here to learn more.`;
}
