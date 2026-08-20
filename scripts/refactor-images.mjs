import fs from 'fs';
import path from 'path';

const SRC_DIRS = ['./src', './src/data'];
const EXTENSIONS_TO_SCAN = ['.tsx', '.ts', '.css', '.json'];
const IMAGE_EXTS = ['jpg', 'jpeg', 'png'];

function refactorDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            refactorDir(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (EXTENSIONS_TO_SCAN.includes(ext)) {
                processFile(fullPath);
            }
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Match any sequence of characters inside quotes that ends with a target extension
    // Matches: "image.jpg", 'path/to/img.png', etc.
    IMAGE_EXTS.forEach(ext => {
        // Regex: 
        // (["']) -> opening quote
        // ([^"']*?) -> non-greedy path
        // \.ext -> literal dot plus extension
        // (?=["']) -> lookahead for closing quote
        const regex = new RegExp(`(["'])([^"']*?)\\.${ext}(?=["'])`, 'g');
        
        content = content.replace(regex, (match, quote, path) => {
            // Skip external URLs
            if (path.includes('://') || path.startsWith('//')) {
                return match;
            }
            console.log(`Refactoring in ${filePath}: ${match} -> ${quote}${path}.webp`);
            return `${quote}${path}.webp`;
        });
    });

    if (content !== originalContent) {
        console.log(`Updated file: ${filePath}`);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

console.log('--- Starting Aggressive Image Reference Refactoring ---');
SRC_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
        refactorDir(dir);
    }
});
console.log('--- Refactoring Complete ---');
