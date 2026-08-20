import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const TARGET_DIRS = ['./public/assets/img', './src/styles/img'];
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function convertDirs() {
    for (const dir of TARGET_DIRS) {
        if (fs.existsSync(dir)) {
            await convertDir(dir);
        }
    }
}

async function convertDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            await convertDir(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (EXTENSIONS.includes(ext)) {
                const webpPath = fullPath.replace(ext, '.webp');

                if (!fs.existsSync(webpPath)) {
                    console.log(`Converting: ${fullPath} -> ${webpPath}`);
                    try {
                        await sharp(fullPath)
                            .webp({ quality: 80 })
                            .toFile(webpPath);
                    } catch (err) {
                        console.error(`Failed to convert ${fullPath}:`, err);
                    }
                } else {
                    console.log(`Skipping (already exists): ${webpPath}`);
                }
            }
        }
    }
}

console.log('--- Starting WebP Conversion ---');
convertDirs()
    .then(() => console.log('--- Conversion Complete ---'))
    .catch(err => console.error('Error during conversion:', err));
