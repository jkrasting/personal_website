import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

async function generateOGImage() {
  const inputPath = join(projectRoot, 'src/assets/shore.jpg');
  const outputPath = join(projectRoot, 'public/og-image.png');

  // OG image dimensions
  const width = 1200;
  const height = 630;

  // Read and resize the source image
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  // Resize to 1200px width maintaining aspect ratio
  const resizedWidth = width;
  const resizedHeight = Math.round((metadata.height / metadata.width) * resizedWidth);

  // Calculate crop position (center vertically)
  const cropTop = Math.round((resizedHeight - height) / 2);

  // Create gradient overlay SVG (transparent to dark, covering bottom portion)
  const gradientOverlay = Buffer.from(`
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
          <stop offset="50%" style="stop-color:rgba(0,0,0,0);stop-opacity:0" />
          <stop offset="100%" style="stop-color:rgba(0,0,0,0.85);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#gradient)" />
    </svg>
  `);

  // Create text overlay SVG
  const textOverlay = Buffer.from(`
    <svg width="${width}" height="${height}">
      <style>
        .url { fill: #94a3b8; font-family: Arial, sans-serif; font-size: 22px; font-weight: 400; }
        .name { fill: #ffffff; font-family: Arial, sans-serif; font-size: 42px; font-weight: bold; }
        .tagline { fill: #cbd5e1; font-family: Arial, sans-serif; font-size: 28px; font-weight: 400; }
      </style>
      <text x="60" y="510" class="url">www.johnkrasting.com</text>
      <text x="60" y="560" class="name">Dr. John P. Krasting | Climate Scientist and Modeler</text>
      <text x="60" y="600" class="tagline">Connecting Global Changes to Local Impacts</text>
    </svg>
  `);

  // Process the image
  await sharp(inputPath)
    .resize(resizedWidth, resizedHeight)
    .extract({ left: 0, top: cropTop, width: width, height: height })
    .composite([
      { input: gradientOverlay, blend: 'over' },
      { input: textOverlay, blend: 'over' }
    ])
    .png()
    .toFile(outputPath);

  console.log(`OG image generated: ${outputPath}`);
}

generateOGImage().catch(console.error);
