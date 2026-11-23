const fs = require('fs');
const html = fs.readFileSync('dist/live_dom_dump.html', 'utf8');

const expectedHubs = [
  { name: 'Python Learning Hub', htmlTitle: 'Python Learning Hub', url: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/' },
  { name: 'AI Learning Hub', htmlTitle: 'AI Learning Hub', url: 'https://aji-nurcahyo.github.io/AI-Learning-Hub/' },
  { name: 'Internet of Things Learning Hub', htmlTitle: 'Internet of Things Learning Hub', url: 'https://aji-nurcahyo.github.io/IoT-Learning-Hub/' },
  { name: 'Multimedia & Computer Vision Learning Hub', htmlTitle: 'Multimedia &amp; Computer Vision Learning Hub', url: 'https://aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub/' },
  { name: 'Signal Processing Learning Hub', htmlTitle: 'Signal Processing Learning Hub', url: 'https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/' },
  { name: 'Remote Sensing & Geospatial Intelligence Learning Hub', htmlTitle: 'Remote Sensing &amp; Geospatial Intelligence Learning Hub', url: 'https://aji-nurcahyo.github.io/Remote-Sensing-Geospatial-Intelligence-Learning-Hub/' },
  { name: 'Scientific Research & Experimental Methods Learning Hub', htmlTitle: 'Scientific Research &amp; Experimental Methods Learning Hub', url: 'https://aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub/' }
];

console.log('=== VERIFYING HUB TITLES & WEBSITE BUTTON LINKS IN LIVE RENDERED DOM ===');
let allPassed = true;
expectedHubs.forEach(h => {
  const titleFound = html.includes(h.htmlTitle);
  const linkFound = html.includes(`href="${h.url}"`);
  console.log(`- ${h.name}:`);
  console.log(`    Title in DOM : ${titleFound}`);
  console.log(`    Link in DOM  : ${linkFound} (href="${h.url}")`);
  if (!titleFound || !linkFound) allPassed = false;
});

const segeraHadirCount = (html.match(/Segera Hadir/g) || []).length;
console.log(`\n"Segera Hadir" badges count (must be 0): ${segeraHadirCount}`);
if (segeraHadirCount > 0) allPassed = false;

const bukaButtonCount = (html.match(/Buka Learning Hub/g) || []).length;
console.log(`"Buka Learning Hub" text count: ${bukaButtonCount}`);

console.log(`\nAll expected titles and links present: ${allPassed}`);
process.exit(allPassed ? 0 : 1);
