const sharp = require('sharp');
const path = require('path');

const src = path.join('public', 'images', 'BailyGroup Logo.jpeg');

(async () => {
  const meta = await sharp(src).metadata();
  console.log('source:', meta.width + 'x' + meta.height, meta.format, meta.size + ' bytes');

  // Trim the surrounding white border, then pad to a centered square canvas so
  // the circular badge sits dead-center for a clean border-radius:50% crop in
  // the header. 512px gives crisp retina rendering at ~56px display size.
  const out = path.join('public', 'images', 'baily-group-logo.webp');
  const info = await sharp(src)
    .trim({ threshold: 10 })
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .webp({ quality: 88, effort: 6 })
    .toFile(out);

  console.log('output:', out, info.width + 'x' + info.height, info.size + ' bytes');
})().catch((e) => { console.error(e); process.exit(1); });
