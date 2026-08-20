const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let changedCount = 0;
walkDir('./src/app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace imports from "@/components/XXXSections" to "@/components/main/XXXSections"
    const newContent = content.replace(/from\s+[\"']@\/components\/([A-Za-z]+Sections)[\"']/g, 'from "@/components/main/$1"');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      changedCount++;
      console.log('Updated', filePath);
    }
  }
});
console.log('Total files updated:', changedCount);
