/**
 * Optimize source photos into web-ready assets in public/images/photos.
 * Usage (from project root):  NODE_PATH=node_modules node scripts/optimize-photos.js
 * Edit SRC and the `jobs` list to add/swap images, then re-run.
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SRC = "/Users/mishawnlolis/Downloads/High Res";
const OUT = path.join(__dirname, "..", "public", "images", "photos");
fs.mkdirSync(OUT, { recursive: true });

// [sourceBasename, outName, width]
const jobs = [
  ["SVI_0344", "hero", 1920],
  ["SVI_0375", "cta", 1920],
  ["SVI_0204", "credits", 1920],
  ["SVI_0094", "pricing", 1920],
  ["SVI_0085", "g1", 900],
  ["SVI_0155", "g2", 900],
  ["SVI_0173", "g3", 900],
  ["SVI_0218", "g4", 900],
  ["SVI_0286", "g5", 900],
  ["SVI_0289", "g6", 900],
  ["SVI_0331", "g7", 900],
  ["SVI_0366", "g8", 900],
];

(async () => {
  for (const [src, name, w] of jobs) {
    const o = path.join(OUT, name + ".jpg");
    await sharp(path.join(SRC, src + ".jpg"))
      .rotate()
      .resize({ width: w })
      .jpeg({ quality: 72, progressive: true, mozjpeg: true })
      .toFile(o);
    const kb = Math.round(fs.statSync(o).size / 1024);
    console.log(`${src}.jpg -> photos/${name}.jpg  (${w}w, ${kb}KB)`);
  }
})();
