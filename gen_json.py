
import json
import re

states_data = [
    ('Andhra Pradesh', 'andhra-pradesh', ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada', 'Rajahmundry']),
    ('Arunachal Pradesh', 'arunachal-pradesh', ['Itanagar', 'Tawang', 'Pasighat', 'Ziro', 'Roing', 'Naharlagun', 'Bomdila', 'Tezu']),
    ('Assam', 'assam', ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon']),
    ('Bihar', 'bihar', ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai']),
    ('Chhattisgarh', 'chhattisgarh', ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Ambikapur']),
    ('Goa', 'goa', ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanguem']),
    ('Gujarat', 'gujarat', ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar']),
    ('Haryana', 'haryana', ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Hisar', 'Karnal', 'Sonipat', 'Rohtak']),
    ('Himachal Pradesh', 'himachal-pradesh', ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Chamba', 'Paonta Sahib', 'Una']),
    ('Jharkhand', 'jharkhand', ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh']),
    ('Karnataka', 'karnataka', ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari']),
    ('Kerala', 'kerala', ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kottayam']),
    ('Madhya Pradesh', 'madhya-pradesh', ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Ratlam']),
    ('Maharashtra', 'maharashtra', ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Thane', 'Amravati']),
    ('Manipur', 'manipur', ['Imphal', 'Thoubal', 'Kakching', 'Ukhrul', 'Churachandpur', 'Senapati', 'Mayang Imphal']),
    ('Meghalaya', 'meghalaya', ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Baghmara', 'Williamnagar', 'Resubelpara']),
    ('Mizoram', 'mizoram', ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai']),
    ('Nagaland', 'nagaland', ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Mon', 'Zunheboto']),
    ('Odisha', 'odisha', ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak']),
    ('Punjab', 'punjab', ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Mohali', 'Bathinda', 'Hoshiarpur', 'Pathankot']),
    ('Rajasthan', 'rajasthan', ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Udaipur', 'Ajmer', 'Bhilwara', 'Alwar']),
    ('Sikkim', 'sikkim', ['Gangtok', 'Namchi', 'Geyzing', 'Mangan', 'Rangpo', 'Jorethang', 'Singtam']),
    ('Tamil Nadu', 'tamil-nadu', ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Tiruppur', 'Vellore']),
    ('Telangana', 'telangana', ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda']),
    ('Tripura', 'tripura', ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Ambassa', 'Khowai', 'Belonia']),
    ('Uttar Pradesh', 'uttar-pradesh', ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Meerut', 'Ghaziabad', 'Prayagraj', 'Bareilly']),
    ('Uttarakhand', 'uttarakhand', ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Kashipur', 'Rudrapur', 'Nainital']),
    ('West Bengal', 'west-bengal', ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Howrah', 'Maheshtala', 'Rajpur Sonarpur', 'Bally']),
    ('Andaman and Nicobar Islands', 'andaman-nicobar', ['Port Blair', 'Diglipur', 'Havelock', 'Rangat', 'Mayabunder', 'Bamboo Flat']),
    ('Chandigarh', 'chandigarh', ['Chandigarh City', 'Manimajra', 'Sector 17', 'Sector 35', 'Sector 22', 'Sector 43']),
    ('Dadra and Nagar Haveli and Daman and Diu', 'dnh-dd', ['Silvassa', 'Daman', 'Diu', 'Amli', 'Dadra']),
    ('Delhi', 'delhi', ['New Delhi', 'North Delhi', 'South Delhi', 'West Delhi', 'East Delhi', 'Dwarka', 'Rohini', 'Saket']),
    ('Jammu and Kashmir', 'jammu-kashmir', ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Samba', 'Reasi']),
    ('Ladakh', 'ladakh', ['Leh', 'Kargil', 'Nubra', 'Dras', 'Diskit']),
    ('Lakshadweep', 'lakshadweep', ['Kavaratti', 'Agatti', 'Minicoy', 'Amini', 'Andrott']),
    ('Puducherry', 'puducherry', ['Puducherry City', 'Karaikal', 'Mahe', 'Yanam', 'Ozhukarai'])
]

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def get_areas(city):
    return [f'{city} North', f'{city} South', f'Central {city}', f'{city} City Center', f'Industrial Zone {city}', f'Tech Park {city}']

def get_intro(name, is_state=True):
    if is_state:
        return f'Brand Banalo Pvt Ltd. is the premier digital marketing agency in {name}, offering comprehensive solutions to scale your business. From SEO to social media, we empower {name} enterprises with data-driven growth strategies.'
    else:
        return f'Looking for a top-tier digital marketing company in {city}? Brand Banalo delivers customized SEO and lead generation services designed to help {city} businesses achieve market leadership and higher ROI.'

output = {'states': []}

for name, slug, cities in states_data:
    state_obj = {
        'name': name,
        'slug': slug,
        'type': 'state',
        'intro': f'Empower your brand in {name} with Brand Banalo’s award-winning digital marketing services. We specialize in driving organic growth and brand visibility for businesses across the entire state of {name}.',
        'meta': {
            'title': f'Best Digital Marketing Agency in {name} | Brand Banalo',
            'description': f'Leading digital marketing agency in {name}. We offer SEO, PPC, and Social Media Marketing services tailored for {name} businesses. Book a free consultation today!',
            'keywords': [f'Digital Marketing {name}', f'SEO Services {name}', f'Marketing Agency {name}', f'Brand Banalo {name}']
        },
        'keywords': [
            f'Digital Marketing Services in {name}',
            f'SEO Services in {name}',
            f'Social Media Marketing {name}',
            f'Lead Generation {name}',
            f'Best SEO Company in {name}'
        ],
        'cities': []
    }
    for city in cities:
        city_slug = slugify(city)
        city_obj = {
            'name': city,
            'slug': city_slug,
            'type': 'city',
            'intro': f'Brand Banalo Pvt Ltd. is the leading provider of expert digital marketing services in {city}. Our team helps local businesses in {city} boost their online presence through advanced SEO and performance marketing.',
            'meta': {
                'title': f'Top Digital Marketing Agency in {city} | SEO & PPC Experts',
                'description': f'Grow your business in {city} with Brand Banalo. We provide the best SEO, Social Media, and Google Ads management services in {city}. Get results-driven marketing!',
                'keywords': [f'Digital Marketing in {city}', f'SEO Company {city}', f'Marketing Agency {city}', f'PPC Services {city}']
            },
            'keywords': [
                f'Digital Marketing Services in {city}',
                f'SEO Services in {city}',
                f'Social Media Marketing {city}',
                f'Lead Generation {city}',
                f'PPC Management {city}'
            ],
            'areas': get_areas(city),
            'faqs': [
                {
                    'q': f'What makes Brand Banalo the best digital marketing agency in {city}?',
                    'a': f'Our combination of deep local market knowledge, industry-leading tools, and a track record of delivering high ROI makes us the preferred choice for businesses in {city}.'
                },
                {
                    'q': f'Do you provide customized SEO plans for small businesses in {city}?',
                    'a': f'Yes, we offer flexible and scalable SEO packages specifically designed to meet the unique needs and budgets of small to medium enterprises in {city}.'
                },
                {
                    'q': f'How can social media marketing help my {city}-based brand?',
                    'a': f'Our social media strategies increase local engagement, build brand trust, and drive targeted traffic from {city} residents directly to your business.'
                }
            ]
        }
        state_obj['cities'].append(city_obj)
    output['states'].append(state_obj)

with open('seo-locations.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2)
