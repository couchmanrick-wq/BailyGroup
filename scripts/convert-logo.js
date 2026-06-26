const sharp = require('sharp');
const path = require('path');

const src = path.join('public', 'images', 'BailyGroup Logo.jpeg');

(async () => {
  const meta = await sharp(src).metadata();
  console.log('source:', meta.width + 'x' + meta.height, meta.format, meta.size + ' bytes');

  // Trim the surrounding solid (near-white) border, then cap width for crisp
  // retina rendering of a header wordmark, and emit optimized WebP.
  const out = path.join('public', 'images', 'baily-group-logo.webp');
  const info = await sharp(src)
    .trim({ threshold: 10 })
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toFile(out);

  console.log('output:', out, info.width + 'x' + info.height, info.size + ' bytes');
})().catch((e) => { console.error(e); process.exit(1); });
