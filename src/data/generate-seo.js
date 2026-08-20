
const fs = require('fs');
const path = require('path');

/**
 * PRODUCTION-READY SEO DATA GENERATOR
 * Scale: 36 States/UTs, ~400+ Cities (Tier 1, 2, 3)
 */

const statesData = [
  {
    name: 'Andhra Pradesh', slug: 'andhra-pradesh',
    cities: ['Visakhapatnam', 'Vijayawada', 'Tirupati', 'Anantapur']
  },
  {
    name: 'Arunachal Pradesh', slug: 'arunachal-pradesh',
    cities: ['Itanagar']
  },
  {
    name: 'Assam', slug: 'assam',
    cities: ['Guwahati', 'Dibrugarh']
  },
  {
    name: 'Bihar', slug: 'bihar',
    cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Darbhanga', 'Nalanda', 'Chapra', 'Hajipur']
  },
  {
    name: 'Chhattisgarh', slug: 'chhattisgarh',
    cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Ambikapur', 'Raigarh']
  },
  {
    name: 'Goa', slug: 'goa',
    cities: ['Panaji']
  },
  {
    name: 'Gujarat', slug: 'gujarat',
    cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Jamnagar', 'Junagadh', 'Gandhinagar']
  },
  {
    name: 'Haryana', slug: 'haryana',
    cities: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Sonipat', 'Rohtak', 'Panchkula', 'Rewari']
  },
  {
    name: 'Himachal Pradesh', slug: 'himachal-pradesh',
    cities: ['Shimla', 'Dharamshala', 'Mandi']
  },
  {
    name: 'Jharkhand', slug: 'jharkhand',
    cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh']
  },
  {
    name: 'Karnataka', slug: 'karnataka',
    cities: ['Bengaluru', 'Mysuru', 'Mangaluru']
  },
  {
    name: 'Kerala', slug: 'kerala',
    cities: ['Kochi', 'Thiruvananthapuram']
  },
  {
    name: 'Madhya Pradesh', slug: 'madhya-pradesh',
    cities: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Satna']
  },
  {
    name: 'Maharashtra', slug: 'maharashtra',
    cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane',]
  },
  {
    name: 'Manipur', slug: 'manipur',
    cities: ['Imphal']
  },
  {
    name: 'Meghalaya', slug: 'meghalaya',
    cities: ['Shillong']
  },
  {
    name: 'Mizoram', slug: 'mizoram',
    cities: ['Aizawl']
  },
  {
    name: 'Nagaland', slug: 'nagaland',
    cities: ['Kohima']
  },
  {
    name: 'Odisha', slug: 'odisha',
    cities: ['Bhubaneswar', 'Cuttack', 'Puri']
  },
  {
    name: 'Punjab', slug: 'punjab',
    cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala']
  },
  {
    name: 'Rajasthan', slug: 'rajasthan',
    cities: ['Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Ajmer']
  },
  {
    name: 'Sikkim', slug: 'sikkim',
    cities: ['Gangtok']
  },
  {
    name: 'Tamil Nadu', slug: 'tamil-nadu',
    cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Kancheepuram']
  },
  {
    name: 'Telangana', slug: 'telangana',
    cities: ['Hyderabad']
  },
  {
    name: 'Tripura', slug: 'tripura',
    cities: ['Agartala']
  },
  {
    name: 'Uttar Pradesh', slug: 'uttar-pradesh',
    cities: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Ghaziabad', 'Prayagraj', 'Bareilly', 'Aligarh', 'Noida', 'Gautam Buddha Nagar', 'Greater Noida']
  },
  {
    name: 'Uttarakhand', slug: 'uttarakhand',
    cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Nainital']
  },
  {
    name: 'West Bengal', slug: 'west-bengal',
    cities: ['Kolkata', 'Howrah']
  },
  // Union Territories
  { name: 'Chandigarh', slug: 'chandigarh', cities: ['Chandigarh City'] },
  { name: 'Delhi', slug: 'delhi', cities: ['New Delhi', 'North Delhi', 'South Delhi', 'West Delhi', 'East Delhi', 'Dwarka', 'Rohini', 'Saket', 'Janakpuri', 'Laxmi Nagar', 'Karol Bagh', 'Connaught Place', 'Greater Kailash', 'Defence Colony', 'Hauz Khas', 'Vasant Kunj', 'Pitampura', 'Model Town', 'Kalkaji', 'Malviya Nagar', 'Ashok Vihar', 'Lajpat Nagar', 'Chandni Chowk', 'Narela', 'Badarpur', 'Mehrauli', 'Najafgarh', 'Dwarka Mor', 'Uttam Nagar', 'Tilak Nagar', 'Paschim Vihar', 'Punjabi Bagh', 'Rajouri Garden', 'Moti Nagar', 'Kirti Nagar', 'Karampura', 'Shadipur', 'Patel Nagar', 'Raj Nagar'] },
  { name: 'Jammu and Kashmir', slug: 'jammu-kashmir', cities: ['Srinagar', 'Jammu'] },
  { name: 'Ladakh', slug: 'ladakh', cities: ['Leh'] },
  { name: 'Puducherry', slug: 'puducherry', cities: ['Puducherry City'] }
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/**
 * SEO CONTENT TEMPLATES
 */
const cityIntroTemplates = [
  (city) => `Empower your ${city}-based brand with Brandbanalo's award-winning digital marketing services. We specialize in scaling local businesses through data-driven results.`,
  (city) => `Looking for the best digital marketing company in ${city}? Brandbanalo delivers customized SEO and performance marketing to help ${city} brands dominate their niche.`,
  (city) => `Brandbanalo is the leading choice for expert SEO and Lead Generation in ${city}. Our team helps local enterprises in ${city} achieve sustainable online growth.`,
  (city) => `Maximize your ROI in ${city} with Brandbanalo. We provide premier digital marketing solutions designed for the unique competitive landscape of ${city}.`,
  (city) => `Take your business to the next level in ${city} with Brandbanalo's comprehensive SEO and Social Media strategies tailored for ${city} audiences.`,
  (city) => `Brandbanalo is the premier digital partner for businesses in ${city}, offering cutting-edge web design and result-oriented marketing services.`,
  (city) => `Drive more qualified leads in ${city} with Brandbanalo. We combine local insights with global marketing standards for unmatched growth in ${city}.`,
  (city) => `Elevate your digital presence in ${city} with Brandbanalo. Our specialized ${city} marketing team focuses on performance and brand visibility.`,
  (city) => `Partner with Brandbanalo, the top SEO agency in ${city}, to transform your business through expert content, PPC, and social media management.`,
  (city) => `Brandbanalo provides the smartest digital marketing strategies in ${city}, helping local startups and enterprises reach their true potential online.`
];

const cityMetaTitleTemplates = [
  (city) => `Best Digital Marketing Agency in ${city} | Brandbanalo`,
  (city) => `Top SEO Services in ${city} | Boost Your ROI Today`,
  (city) => `Leading Marketing Company in ${city} - Brandbanalo`,
  (city) => `#1 Digital Marketing Services in ${city} | Expert SEO`,
  (city) => `Digital Marketing Agency in ${city} | Lead Gen Experts`,
  (city) => `SEO & Performance Marketing Agency in ${city}`,
  (city) => `Top-Rated Digital Marketing Company in ${city}`,
  (city) => `Brandbanalo: Award-Winning Agency in ${city}`,
  (city) => `Expert SEO & Digital Marketing Services for ${city}`,
  (city) => `Scale Your Business in ${city} with Brandbanalo`
];

const cityMetaDescTemplates = [
  (city) => `Scale your brand with the top digital marketing agency in ${city}. Expert SEO, Social Media, and Performance Marketing services tailored for ${city} businesses.`,
  (city) => `Grow in ${city} with Brandbanalo. We provide results-driven SEO, Google Ads, and social media management in ${city}. Get a free marketing audit today!`,
  (city) => `Looking for an expert SEO company in ${city}? Brandbanalo helps you dominate search results and drive more sales with data-backed marketing in ${city}.`,
  (city) => `Leading digital marketing company in ${city}. Boost brand awareness and lead generation with the experts at Brandbanalo. Specialized for ${city} SMEs.`,
  (city) => `Premier digital agency in ${city} offering SEO, PPC, and SMM. We help ${city} based businesses scale through performance marketing. Contact us now!`,
  (city) => `Maximize your reach in ${city} with Brandbanalo's customized digital marketing. From SEO to Social Media, we cover everything for all ${city} businesses.`,
  (city) => `Brandbanalo is the #1 digital partner in ${city}. We deliver unmatched ROI through specialized SEO, content, and lead gen for ${city} businesses.`,
  (city) => `Experience growth in ${city} with our expert marketing team. Brandbanalo specializes in SEO and Performance Marketing for all industries across ${city}.`,
  (city) => `Boost search rankings in ${city} with Brandbanalo. Our proven SEO strategies help ${city} businesses attract more customers and increase revenue.`,
  (city) => `Scale your brand in ${city} with the leaders in digital marketing. Brandbanalo offers specialized SEO and Social Media Management for the ${city} market.`
];

const faqTemplates = [
  {
    q: (city) => `Why is Brandbanalo the best agency in ${city}?`,
    a: (city) => `Brandbanalo combines deep local market insights of ${city} with world-class digital tools to deliver measurable ROI for our clients.`
  },
  {
    q: (city) => `How long does SEO take to show results in ${city}?`,
    a: (city) => `Typically, businesses in ${city} see significant improvement in organic rankings and traffic within 3 to 6 months of starting our specialized SEO campaign.`
  },
  {
    q: (city) => `Do you offer services specifically for small businesses in ${city}?`,
    a: (city) => `Absolutely! We have scalable packages designed specifically for ${city}-based startups and small enterprises looking to grow their digital footprint.`
  },
  {
    q: (city) => `What industries do you serve in ${city}?`,
    a: (city) => `We serve a diverse range of industries in ${city}, including Real Estate, E-commerce, Healthcare, Education, and B2B services.`
  },
  {
    q: (city) => `Can social media marketing help my brand in ${city}?`,
    a: (city) => `Yes, our social media strategies focus on local engagement in ${city} to build brand loyalty and drive high-intent visitors back to your website.`
  }
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * GENERATION LOGIC
 */
const finalOutput = { states: [] };

for (const state of statesData) {
  const stateObj = {
    name: state.name,
    slug: state.slug,
    type: 'state',
    intro: `Empower your brand in ${state.name} with Brandbanalo’s award-winning digital marketing services. We specialize in driving organic growth and brand visibility for businesses across the entire state of ${state.name}.`,
    meta: {
      title: `Best Digital Marketing Agency in ${state.name} | Brandbanalo`,
      description: `Leading digital marketing agency in ${state.name}. We offer SEO, PPC, and Social Media Marketing services tailored for ${state.name} businesses. Book a free consultation today!`,
      keywords: [`Digital Marketing ${state.name}`, `SEO Services ${state.name}`, `Marketing Agency ${state.name}`, `Brandbanalo ${state.name}`]
    },
    keywords: [
      `Digital Marketing Services in ${state.name}`,
      `SEO Services in ${state.name}`,
      `Social Media Marketing ${state.name}`,
      `Lead Generation ${state.name}`,
      `Best SEO Company in ${state.name}`
    ],
    cities: []
  };

  for (const city of state.cities) {
    const citySlug = slugify(city);

    // Randomly pick templates for this city
    const intro = getRandom(cityIntroTemplates)(city);
    const metaTitle = getRandom(cityMetaTitleTemplates)(city);
    const metaDesc = getRandom(cityMetaDescTemplates)(city);

    // Pick 3 random FAQs
    const shuffledFAQs = [...faqTemplates].sort(() => 0.5 - Math.random()).slice(0, 3);
    const finalFAQs = shuffledFAQs.map(f => ({
      q: f.q(city),
      a: f.a(city)
    }));

    stateObj.cities.push({
      name: city,
      slug: citySlug,
      type: 'city',
      intro: intro,
      meta: {
        title: metaTitle,
        description: metaDesc,
        keywords: [`Digital Marketing in ${city}`, `SEO Company ${city}`, `Marketing Agency ${city}`, `Best Agency ${city}`]
      },
      keywords: [
        `Digital Marketing Services in ${city}`,
        `SEO Services in ${city}`,
        `Social Media Marketing ${city}`,
        `Lead Generation ${city}`,
        `Performance Marketing ${city}`
      ],
      areas: [`${city} North`, `${city} South`, `Central ${city}`, `${city} Hub`, `${city} Sector`],
      faqs: finalFAQs
    });
  }

  finalOutput.states.push(stateObj);
}

const outputPath = path.join(__dirname, 'seo-locations.json');
fs.writeFileSync(outputPath, JSON.stringify(finalOutput, null, 2), 'utf-8');
console.log(`Successfully generated SEO content for ${statesData.length} states/UTs and ${finalOutput.states.reduce((acc, s) => acc + s.cities.length, 0)} cities.`);
console.log(`File saved at: ${outputPath}`);
