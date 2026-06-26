const sharp = require('sharp');
const path = require('path');

const src = path.join('public', 'images', 'Lawrence-Baily.jpg');

(async () => {
  const meta = await sharp(src).metadata();
  console.log('source:', meta.width + 'x' + meta.height, meta.format);

  // Portrait of Lawrence Baily for the About section. Source is 400x400; keep
  // square and bump to 600px for crisp display at common avatar sizes.
  const out = path.join('public', 'images', 'lawrence-baily.webp');
  const info = await sharp(src)
    .resize(600, 600, { fit: 'cover' })
    .webp({ quality: 82, effort: 6 })
    .toFile(out);

  console.log('output:', out, info.width + 'x' + info.height, info.size + ' bytes');
})().catch((e) => { console.error(e); process.exit(1); });
