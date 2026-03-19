// # /scripts/generateImageLists.js
const fs = require('fs');
const path = require('path');

// ----------- CONFIGURABLE SECTION -----------
const OUTPUT_DIR = path.join(__dirname, '../src/components/');

// Each entry: [name, public subdir, output filename, exported var name]
const specs = [
  ['Affiliations', 'affiliations', 'affiliations.generated.ts', 'affiliationsImages'],
];
// ----------- END CONFIGURABLE SECTION -------

let summary = [];

specs.forEach(([label, subdir, outFile, exportVar]) => {
  const dir = path.join(__dirname, '../public', subdir);
  const out = path.join(OUTPUT_DIR, outFile);

  if (!fs.existsSync(dir)) {
    console.warn(`Warning: ${label} directory not found: ${dir}`);
    return;
  }

  const imageFiles = fs.readdirSync(dir)
    .filter(file => /\.(png|jpe?g|webp|svg)$/i.test(file))
    .map(file => `/${subdir}/${file}`);

  const fileContent = `// AUTO-GENERATED. DO NOT EDIT.
export const ${exportVar} = ${JSON.stringify(imageFiles, null, 2)};
`;

  fs.writeFileSync(out, fileContent);
  summary.push(`${label} list generated with ${imageFiles.length} images.`);
});

console.log(summary.join('\n'));
