import cron from 'node-cron';
import { fetchAllRaises } from '../domains/data';

console.log("🚀 [DEBUG] Scheduler script is running...");

// Run the scraper every 30 minutes
cron.schedule('*/30 * * * *', async () => {
  console.log("🔄 [DEBUG] Running scheduled scraping...");
  const raises = await fetchAllRaises();
  if (raises.length) {
    console.log(`✅ [Scheduled] Cached ${raises.length} raises.`);
  } else {
    console.log("⚠️ [Scheduled] No new raises found.");
  }
});

// Keep the process running
setInterval(() => console.log("⏳ [DEBUG] Scheduler is still active..."), 60000);