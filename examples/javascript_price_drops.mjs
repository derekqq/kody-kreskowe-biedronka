/**
 * Przykład użycia API kodyzbiedry.pl w JavaScript/Node.js.
 * Pobiera dzisiejsze top przeceny i wyświetla w konsoli.
 *
 * Uruchom: node javascript_price_drops.mjs
 */

const API_BASE = 'https://api.kodyzbiedry.pl';

async function getPriceDrops(minDrop = 20, limit = 10) {
  const url = `${API_BASE}/api/recent-price-drops?minDropPercent=${minDrop}&sortBy=dropPercent&sortOrder=desc&limit=${limit}&groupDuplicates=true`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

async function getProduct(ean) {
  const url = `${API_BASE}/api/products/${ean}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Product not found: ${ean}`);
  const json = await res.json();
  return json.data;
}

async function main() {
  console.log('🔥 Dzisiejsze TOP przeceny w Biedronce\n');
  console.log('-'.repeat(60));

  const data = await getPriceDrops(25, 10);

  data.drops.forEach((drop, i) => {
    const name = drop.name.slice(0, 45).padEnd(45);
    const pct = Math.round(drop.dropPercent);
    console.log(
      `${String(i + 1).padStart(2)}. ${name} ${drop.previousPrice.toFixed(2)} → ${drop.currentPrice.toFixed(2)} zł (-${pct}%)`
    );
  });

  console.log('-'.repeat(60));
  console.log(`\n📊 Łącznie przecen: ${data.stats.totalDrops}`);
  console.log(`   Średnia obniżka: ${data.stats.avgDropPercent.toFixed(1)}%`);
  console.log(`   Max obniżka: ${data.stats.maxDropPercent.toFixed(1)}%`);
  console.log(`\n🔗 Więcej na: https://kodyzbiedry.pl/najlepsze-przeceny-z-24h/`);
}

main().catch(console.error);
