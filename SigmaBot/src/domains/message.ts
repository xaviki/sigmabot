export function formatRaiseMessage(raise: { companyName: string, raisedAmount: number, sector: string }) {  // <-- Added export
    return `🚀 *${raise.companyName}* just raised **$${raise.raisedAmount}M** in the *${raise.sector}* sector!\n\nInterested? Click here to learn more.`;
  }