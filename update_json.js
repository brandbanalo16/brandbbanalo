const fs = require('fs');

const servicesPath = './src/data/services.json';
const megaServicesPath = './src/data/megaServices.json';

const servicesData = require(servicesPath);
const megaServicesData = require(megaServicesPath);

// Define keys for existing industries
const industryKeys = {
  'ind-001': 'pcd-pharma',
  'ind-002': 'car-parts',
  'ind-003': 'road-safety',
  'ind-004': 'electronics', // Also covers 'Electronic Device Supplier'
  'ind-005': 'industrial-automation',
  'ind-006': 'healthcare'
};

servicesData.industries.forEach(ind => {
  ind.key = industryKeys[ind.id];
});

// New industries from mega menu
const newIndustries = [
  { name: 'SMC & GRP Tanks Manufacturer', key: 'smc-grp-tanks', id: 'ind-007' },
  { name: 'Offline Brand Advertisement', key: 'offline-brand-ads', id: 'ind-008' },
  { name: 'Bag Manufacturer', key: 'bag-manufacturer', id: 'ind-009' },
  { name: 'Machinery Manufacturer', key: 'machinery-manufacturer', id: 'ind-010' },
  { name: 'Ball Bearing Importer & Supplier', key: 'ball-bearing', id: 'ind-011' },
  { name: 'Pool Table Manufacturer', key: 'pool-table', id: 'ind-012' },
  { name: 'Fire Safety Doors Manufacturer', key: 'fire-safety-doors', id: 'ind-013' },
];

newIndustries.forEach(n => {
  servicesData.industries.push({
    id: n.id,
    key: n.key,
    name: n.name,
    description: `We support ${n.name} with bespoke digital marketing, websites, and lead generation funnels designed to increase direct enquiries and B2B sales.`,
    image: `/assets/img/industry/${n.key}.jpg`,
    recommendedServiceIds: ['001', '002', '005', '007']
  });
});

// Write services.json
fs.writeFileSync(servicesPath, JSON.stringify(servicesData, null, 2));

// Update mega menu links dynamically based on the exact name of the card
// Usually cards look like "PCD Pharma Industries Website Design"
// We want the link to be `/industries/[industryKey]/[serviceKey]` or just map exactly.
const industryMap = {
  "PCD Pharma Industries": "pcd-pharma",
  "Car Parts Importer & Suppliers": "car-parts",
  "Road Safety Product Manufacturer": "road-safety",
  "Electronics Devices Supplier": "electronics",
  "Industrial Automation Solutions": "industrial-automation",
  "Healthcare Industries": "healthcare",
  "SMC & GRP Tanks Manufacturer": "smc-grp-tanks",
  "Offline Brand Advertisement": "offline-brand-ads",
  "Bag Manufacturer": "bag-manufacturer",
  "Machinery Manufacturer": "machinery-manufacturer",
  "Ball Bearing Importer & Supplier": "ball-bearing",
  "Pool Table Manufacturer": "pool-table",
  "Electronic Device Supplier": "electronics", 
  "Fire Safety Doors Manufacturer": "fire-safety-doors"
};

// Map mega service id to service key
const serviceIdToKey = {
  "website-design": "web-design",
  "website-development": "web-development",
  "social-media-management": "social-media-management",
  "ads-management": "ads-management",
  "lead-generation": "lead-generation",
  "branding-design": "branding-designing",
  "seo": "seo"
};

megaServicesData.forEach(megaService => {
  const serviceKey = serviceIdToKey[megaService.id];
  
  megaService.cards.forEach(card => {
    if (card.title === "View All") {
       card.link = "/services";
       return;
    }
    
    // Find matching industry
    let matchedIndKey = null;
    for (const [name, key] of Object.entries(industryMap)) {
      if (card.title.includes(name)) {
        matchedIndKey = key;
        break;
      }
    }
    
    if (matchedIndKey && serviceKey) {
      card.link = `/services/${serviceKey}/${matchedIndKey}`;
    } else {
      console.log(`Unmatched card: ${card.title} under ${megaService.id}`);
    }
  });
});

// Write megaServices.json
fs.writeFileSync(megaServicesPath, JSON.stringify(megaServicesData, null, 2));

console.log("Successfully rebuilt services and mega menu links");
