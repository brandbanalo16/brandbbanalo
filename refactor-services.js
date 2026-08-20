const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  const normPath = path.normalize(filePath).replace(/\\/g, '/');
  if (normPath === 'src/app/services/page.tsx') return;
  if (!normPath.endsWith('page.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace imports
  content = content.replace(/import\s+(?:Modern)?ServiceDetailsSections\s+from\s+['"]@\/components\/main\/(?:Modern)?ServiceDetailsSections['"];?/g, 'import ServiceSections from "@/components/main/ServiceSections";');
  
  // Replace <ServiceDetailsSections ... /> or <ModernServiceDetailsSections ... />
  // First handle the case with string quotes like initialServiceId="007"
  content = content.replace(/<(?:Modern)?ServiceDetailsSections[\s\S]*?initialServiceId=(['"]\w+['"])[\s\S]*?\/>/g, '<ServiceSections showBanner={false} initialServiceId=$1 />');
  
  // Next handle the case with braces like initialServiceId={service.id}
  content = content.replace(/<(?:Modern)?ServiceDetailsSections[\s\S]*?initialServiceId=\{([^}]+)\}[\s\S]*?\/>/g, '<ServiceSections showBanner={false} initialServiceId={$1} />');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
  }
}

walkDir('./src/app/services', processFile);
