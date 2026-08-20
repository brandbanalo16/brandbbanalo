
const fs = require('fs');

const statesData = [
    ['Andhra Pradesh', 'andhra-pradesh', ['Visakhapatnam', 'Vijayawada', 'Guntur']],
    ['Arunachal Pradesh', 'arunachal-pradesh', ['Itanagar', 'Tawang', 'Pasighat']],
    ['Assam', 'assam', ['Guwahati', 'Silchar', 'Dibrugarh']],
    ['Bihar', 'bihar', ['Patna', 'Gaya', 'Bhagalpur']],
    ['Chhattisgarh', 'chhattisgarh', ['Raipur', 'Bhilai', 'Bilaspur']],
    ['Goa', 'goa', ['Panaji', 'Margao', 'Vasco da Gama']],
    ['Gujarat', 'gujarat', ['Ahmedabad', 'Surat', 'Vadodara']],
    ['Haryana', 'haryana', ['Gurugram', 'Faridabad', 'Panipat']],
    ['Himachal Pradesh', 'himachal-pradesh', ['Shimla', 'Dharamshala', 'Solan']],
    ['Jharkhand', 'jharkhand', ['Ranchi', 'Jamshedpur', 'Dhanbad']],
    ['Karnataka', 'karnataka', ['Bengaluru', 'Mysuru', 'Hubballi']],
    ['Kerala', 'kerala', ['Kochi', 'Thiruvananthapuram', 'Kozhikode']],
    ['Madhya Pradesh', 'madhya-pradesh', ['Indore', 'Bhopal', 'Jabalpur']],
    ['Maharashtra', 'maharashtra', ['Mumbai', 'Pune', 'Nagpur']],
    ['Manipur', 'manipur', ['Imphal', 'Thoubal', 'Kakching']],
    ['Meghalaya', 'meghalaya', ['Shillong', 'Tura', 'Jowai']],
    ['Mizoram', 'mizoram', ['Aizawl', 'Lunglei', 'Saiha']],
    ['Nagaland', 'nagaland', ['Kohima', 'Dimapur', 'Mokokchung']],
    ['Odisha', 'odisha', ['Bhubaneswar', 'Cuttack', 'Rourkela']],
    ['Punjab', 'punjab', ['Ludhiana', 'Amritsar', 'Jalandhar']],
    ['Rajasthan', 'rajasthan', ['Jaipur', 'Jodhpur', 'Kota']],
    ['Sikkim', 'sikkim', ['Gangtok', 'Namchi', 'Geyzing']],
    ['Tamil Nadu', 'tamil-nadu', ['Chennai', 'Coimbatore', 'Madurai']],
    ['Telangana', 'telangana', ['Hyderabad', 'Warangal', 'Nizamabad']],
    ['Tripura', 'tripura', ['Agartala', 'Udaipur', 'Dharmanagar']],
    ['Uttar Pradesh', 'uttar-pradesh', ['Lucknow', 'Kanpur', 'Varanasi']],
    ['Uttarakhand', 'uttarakhand', ['Dehradun', 'Haridwar', 'Roorkee']],
    ['West Bengal', 'west-bengal', ['Kolkata', 'Asansol', 'Siliguri']],
    ['Andaman and Nicobar Islands', 'andaman-nicobar', ['Port Blair', 'Diglipur', 'Havelock']],
    ['Chandigarh', 'chandigarh', ['Chandigarh City', 'Manimajra', 'Sector 17']],
    ['Dadra and Nagar Haveli and Daman and Diu', 'dnh-dd', ['Silvassa', 'Daman', 'Diu']],
    ['Delhi', 'delhi', ['New Delhi', 'North Delhi', 'South Delhi']],
    ['Jammu and Kashmir', 'jammu-kashmir', ['Srinagar', 'Jammu', 'Anantnag']],
    ['Ladakh', 'ladakh', ['Leh', 'Kargil', 'Nubra']],
    ['Lakshadweep', 'lakshadweep', ['Kavaratti', 'Agatti', 'Minicoy']],
    ['Puducherry', 'puducherry', ['Puducherry City', 'Karaikal', 'Mahe']]
];

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getAreas(city) {
    return [`${city} North`, `${city} South`, `Central ${city}`, `${city} Main Market` ];
}

const output = { states: [] };

for (const [name, slug, cities] of statesData) {
    const stateObj = {
        name: name,
        slug: slug,
        type: 'state',
        intro: `Scale your business in ${name} with Brand Banalo. We are the leading digital marketing agency in ${name}, specializing in SEO, SMM, and lead generation.`,
        meta: {
            title: `Best Digital Marketing Agency in ${name} | Brand Banalo`,
            description: `Grow your business in ${name} with our expert digital marketing services. Top-rated SEO, Social Media, and PPC agency in ${name}.`,
            keywords: [`Digital Marketing ${name}`, `SEO Services ${name}`, `Marketing Agency ${name}`]
        },
        keywords: [
            `Digital Marketing Services in ${name}`,
            `SEO Services in ${name}`,
            `Social Media Marketing ${name}`,
            `Lead Generation ${name}`
        ],
        cities: []
    };

    for (const city of cities) {
        const citySlug = slugify(city);
        const cityObj = {
            name: city,
            slug: citySlug,
            type: 'city',
            intro: `Brand Banalo offers customized digital marketing strategies for brands in ${city}. Boost your online presence with the best SEO and performance marketing in ${city}.`,
            meta: {
                title: `Best Digital Marketing Agency in ${city} | SEO Experts`,
                description: `Leading digital marketing company in ${city}. We provide results-driven SEO, Google Ads, and social media management in ${city}.`,
                keywords: [`Digital Marketing in ${city}`, `SEO Company ${city}`, `Marketing Agency ${city}`]
            },
            keywords: [
                `Digital Marketing Services in ${city}`,
                `SEO Services in ${city}`,
                `Social Media Marketing ${city}`,
                `Lead Generation ${city}`
            ],
            areas: getAreas(city),
            faqs: [
                {
                    q: `Why choose Brand Banalo in ${city}?`,
                    a: `We provide data-driven strategies and local expertise to ensure your brand stands out in ${city}.`
                },
                {
                    q: `What SEO services do you offer in ${city}?`,
                    a: `We offer on-page SEO, technical audits, and link building specifically for businesses in ${city}.`
                }
            ]
        };
        stateObj.cities.push(cityObj);
    }
    output.states.push(stateObj);
}

fs.writeFileSync('seo-locations-compact.json', JSON.stringify(output, null, 2), 'utf-8');
console.log('JSON generated successfully.');
