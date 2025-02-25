import puppeteer from 'puppeteer';

const RAISES_URL = "https://defillama.com/raises";
let cachedRaises: any[] = []; // Stores recent raises

// ✅ Function to scrape all raises
export async function fetchAllRaises(): Promise<any[]> {
  console.log("🔍 [DEBUG] Launching Puppeteer to scrape DeFiLlama Raises...");

  const browser = await puppeteer.launch({ headless: true }); // 🔹 FIXED: Changed `"new"` to `true`
  const page = await browser.newPage();

  try {
    await page.goto(RAISES_URL, { waitUntil: 'domcontentloaded' });
    console.log("✅ [DEBUG] Page loaded successfully.");

    // Extract all raises from the table
    const raises = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('tbody tr')).map(row => {
        const cells = row.querySelectorAll('td');
        return {
          company: cells[0]?.innerText.trim(),
          amount: cells[1]?.innerText.trim(),
          date: cells[2]?.innerText.trim(),
          category: cells[3]?.innerText.trim(),
          leadInvestor: cells[4]?.innerText.trim(),
        };
      });
    });

    await browser.close();

    if (!raises.length) {
      console.log("⚠️ [WARNING] No raise data found.");
      return [];
    }

    console.log("✅ [DEBUG] Scraped raises:", raises);
    cachedRaises = raises; // Update cached data
    return raises;

  } catch (error) {
    console.error("❌ [ERROR] Puppeteer scraping failed:", error);
    await browser.close();
    return [];
  }
}

// ✅ Fetches the latest raise from cached data
export async function fetchLatestRaise(): Promise<any | null> {
  return cachedRaises.length > 0 ? cachedRaises[0] : null;
}

// ✅ Ensure functions are properly exported
export { fetchAllRaises, fetchLatestRaise }; // 🔹 FIXED: Removed duplicate export declarations