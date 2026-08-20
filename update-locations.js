const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'seo-locations.json');
let data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newCities = [
    "Delhi", "Gurugram", "Noida", "Delhi NCR", "Ghaziabad", "Faridabad", "Janakpuri", "Greater Noida"
].map(city => {
    const slug = city.toLowerCase().replace(/ /g, '-');
    return {
        "name": city,
        "slug": slug,
        "type": "city",
        "intro": `Empower your ${city}-based brand with Brandbanalo's award-winning digital marketing services. We specialize in scaling local businesses through data-driven results.`,
        "meta": {
            "title": `Best Digital Marketing Agency in ${city} | Brandbanalo`,
            "description": `Boost search rankings in ${city} with Brandbanalo. Our proven strategies help ${city} businesses attract more customers and increase revenue.`,
            "keywords": [
                `Digital Marketing in ${city}`,
                `SEO Company ${city}`,
                `Marketing Agency ${city}`,
                `Best Agency ${city}`
            ]
        },
        "keywords": [
            `Digital Marketing Services in ${city}`,
            `SEO Services in ${city}`,
            `Social Media Marketing ${city}`,
            `Lead Generation ${city}`,
            `Performance Marketing ${city}`
        ],
        "areas": [
            `${city} North`,
            `${city} South`,
            `Central ${city}`,
            `${city} Hub`,
            `${city} Sector`
        ],
        "faqs": [
            {
                "q": `Why is Brandbanalo the best agency in ${city}?`,
                "a": `Brandbanalo combines deep local market insights of ${city} with world-class digital tools to deliver measurable ROI for our clients.`
            },
            {
                "q": `How long does SEO take to show results in ${city}?`,
                "a": `Typically, businesses in ${city} see significant improvement in organic rankings and traffic within 3 to 6 months of starting our specialized SEO campaign.`
            },
            {
                "q": `Do you offer services specifically for small businesses in ${city}?`,
                "a": `Absolutely! We have scalable packages designed specifically for ${city}-based startups and small enterprises looking to grow their digital footprint.`
            }
        ]
    };
});

const newRegion = {
    "name": "Delhi Capital Region",
    "slug": "delhi-capital-region",
    "type": "state",
    "intro": "Empower your brand in the Delhi Capital Region with Brandbanalo’s award-winning digital marketing services. We specialize in driving organic growth and brand visibility for businesses across the entire NCR region.",
    "meta": {
        "title": "Best Digital Marketing Agency in Delhi NCR | Brandbanalo",
        "description": "Leading digital marketing agency in Delhi NCR. We offer SEO, PPC, and Social Media Marketing services tailored for Delhi NCR businesses. Book a free consultation today!",
        "keywords": [
            "Digital Marketing Delhi NCR",
            "SEO Services Delhi NCR",
            "Marketing Agency Delhi NCR",
            "Brandbanalo Delhi NCR"
        ]
    },
    "keywords": [
        "Digital Marketing Services in Delhi NCR",
        "SEO Services in Delhi NCR",
        "Social Media Marketing Delhi NCR",
        "Lead Generation Delhi NCR",
        "Best SEO Company in Delhi NCR"
    ],
    "cities": newCities
};

data.states.push(newRegion);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log("Successfully updated seo-locations.json");
