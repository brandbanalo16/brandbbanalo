
const fs = require('fs');

const statesData = [
    ['Andhra Pradesh', 'andhra-pradesh', ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada', 'Rajahmundry']],
    ['Arunachal Pradesh', 'arunachal-pradesh', ['Itanagar', 'Tawang', 'Pasighat', 'Ziro', 'Roing', 'Naharlagun', 'Bomdila', 'Tezu']],
    ['Assam', 'assam', ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon']],
    ['Bihar', 'bihar', ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai']],
    ['Chhattisgarh', 'chhattisgarh', ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur']],
    ['Goa', 'goa', ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanguem']],
    ['Gujarat', 'gujarat', ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar']],
    ['Haryana', 'haryana', ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Sonipat', 'Rohtak']],
    ['Himachal Pradesh', 'himachal-pradesh', ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Chamba', 'Paonta Sahib', 'Una']],
    ['Jharkhand', 'jharkhand', ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh']],
    ['Karnataka', 'karnataka', ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari']],
    ['Kerala', 'kerala', ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kottayam']],
    ['Madhya Pradesh', 'madhya-pradesh', ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Ratlam']],
    ['Maharashtra', 'maharashtra', ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane', 'Amravati']],
    ['Manipur', 'manipur', ['Imphal', 'Thoubal', 'Kakching', 'Ukhrul', 'Churachandpur', 'Senapati', 'Mayang Imphal']],
    ['Meghalaya', 'meghalaya', ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Baghmara', 'Williamnagar', 'Resubelpara']],
    ['Mizoram', 'mizoram', ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai']],
    ['Nagaland', 'nagaland', ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto']],
    ['Odisha', 'odisha', ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak']],
    ['Punjab', 'punjab', ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Mohali', 'Bathinda', 'Hoshiarpur', 'Pathankot']],
    ['Rajasthan', 'rajasthan', ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Udaipur', 'Ajmer', 'Bhilwara', 'Alwar']],
    ['Sikkim', 'sikkim', ['Gangtok', 'Namchi', 'Geyzing', 'Mangan', 'Rangpo', 'Jorethang', 'Singtam']],
    ['Tamil Nadu', 'tamil-nadu', ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Tiruppur', 'Vellore']],
    ['Telangana', 'telangana', ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda']],
    ['Tripura', 'tripura', ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Ambassa', 'Khowai', 'Belonia']],
    ['Uttar Pradesh', 'uttar-pradesh', ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Ghaziabad', 'Prayagraj', 'Bareilly']],
    ['Uttarakhand', 'uttarakhand', ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Kashipur', 'Rudrapur', 'Nainital']],
    ['West Bengal', 'west-bengal', ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Howrah', 'Maheshtala', 'Rajpur Sonarpur', 'Bally']],
    ['Andaman and Nicobar Islands', 'andaman-nicobar', ['Port Blair', 'Diglipur', 'Havelock', 'Rangat', 'Mayabunder', 'Bamboo Flat']],
    ['Chandigarh', 'chandigarh', ['Chandigarh City', 'Manimajra', 'Sector 17', 'Sector 35', 'Sector 22', 'Sector 43']],
    ['Dadra and Nagar Haveli and Daman and Diu', 'dnh-dd', ['Silvassa', 'Daman', 'Diu', 'Amli', 'Dadra']],
    ['Delhi', 'delhi', ['New Delhi', 'North Delhi', 'South Delhi', 'West Delhi', 'East Delhi', 'Dwarka', 'Rohini', 'Saket']],
    ['Jammu and Kashmir', 'jammu-kashmir', ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Samba', 'Reasi']],
    ['Ladakh', 'ladakh', ['Leh', 'Kargil', 'Nubra', 'Dras', 'Diskit']],
    ['Lakshadweep', 'lakshadweep', ['Kavaratti', 'Agatti', 'Minicoy', 'Amini', 'Andrott']],
    ['Puducherry', 'puducherry', ['Puducherry City', 'Karaikal', 'Mahe', 'Yanam', 'Ozhukarai']]
];

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getAreas(city) {
    return [`${city} North`, `${city} South`, `Central ${city}`, `${city} City Center`, `Industrial Zone ${city}`, `Tech Park ${city}`];
}

const output = { states: [] };

for (const [name, slug, cities] of statesData) {
    const stateObj = {
        name: name,
        slug: slug,
        type: 'state',
        intro: `Empower your brand in ${name} with Brand Banalo’s award-winning digital marketing services. We specialize in driving organic growth and brand visibility for businesses across the entire state of ${name}.`,
        meta: {
            title: `Best Digital Marketing Agency in ${name} | Brand Banalo`,
            description: `Leading digital marketing agency in ${name}. We offer SEO, PPC, and Social Media Marketing services tailored for ${name} businesses. Book a free consultation today!`,
            keywords: [`Digital Marketing ${name}`, `SEO Services ${name}`, `Marketing Agency ${name}`, `Brand Banalo ${name}`]
        },
        keywords: [
            `Digital Marketing Services in ${name}`,
            `SEO Services in ${name}`,
            `Social Media Marketing ${name}`,
            `Lead Generation ${name}`,
            `Best SEO Company in ${name}`
        ],
        cities: []
    };

    for (const city of cities) {
        const citySlug = slugify(city);
        const cityObj = {
            name: city,
            slug: citySlug,
            type: 'city',
            intro: `Brand Banalo Pvt Ltd. is the leading provider of expert digital marketing services in ${city}. Our team helps local businesses in ${city} boost their online presence through advanced SEO and performance marketing.`,
            meta: {
                title: `Top Digital Marketing Agency in ${city} | SEO & PPC Experts`,
                description: `Grow your business in ${city} with Brand Banalo. We provide the best SEO, Social Media, and Google Ads management services in ${city}. Get results-driven marketing!`,
                keywords: [`Digital Marketing in ${city}`, `SEO Company ${city}`, `Marketing Agency ${city}`, `PPC Services ${city}`]
            },
            keywords: [
                `Digital Marketing Services in ${city}`,
                `SEO Services in ${city}`,
                `Social Media Marketing ${city}`,
                `Lead Generation ${city}`,
                `PPC Management ${city}`
            ],
            areas: getAreas(city),
            faqs: [
                {
                    q: `What makes Brand Banalo the best digital marketing agency in ${city}?`,
                    a: `Our combination of deep local market knowledge, industry-leading tools, and a track record of delivering high ROI makes us the preferred choice for businesses in ${city}.`
                },
                {
                    q: `Do you provide customized SEO plans for small businesses in ${city}?`,
                    a: `Yes, we offer flexible and scalable SEO packages specifically designed to meet the unique needs and budgets of small to medium enterprises in ${city}.`
                },
                {
                    q: `How can social media marketing help my ${city}-based brand?`,
                    a: `Our social media strategies increase local engagement, build brand trust, and drive targeted traffic from ${city} residents directly to your business.`
                }
            ]
        };
        stateObj.cities.push(cityObj);
    }
    output.states.push(stateObj);
}

fs.writeFileSync('seo-locations.json', JSON.stringify(output, null, 2), 'utf-8');
console.log('JSON generated successfully: seo-locations.json');
