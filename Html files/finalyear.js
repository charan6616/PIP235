const destinations = [
    { name: "Taj Mahal", price: 1500, rating: 4.9, reviews: 10234, image: "images/Tourism Pictures/taj-mahal.avif" },
    { name: "Jaipur City Palace", price: 1200, rating: 4.7, reviews: 8765, image: "images/Tourism Pictures/jaipur-city.jpg" },
    { name: "Goa Beaches", price: 2000, rating: 4.8, reviews: 9876, image: "images/Tourism Pictures/goa-beaches.jpg" },
    { name: "Varanasi Ghats", price: 1000, rating: 4.6, reviews: 7654, image: "images/Tourism Pictures/varanasi-gharts.jpg" },
    { name: "Kerala Backwaters", price: 2500, rating: 4.9, reviews: 8901, image: "images/Tourism Pictures/kerala-backwaters.jpg" },
    { name: "Amber Fort, Jaipur", price: 1100, rating: 4.5, reviews: 6789, image: "images/Tourism Pictures/amber-fort.jpg" },
    { name: "Mysore Palace", price: 800, rating: 4.4, reviews: 5678, image: "images/Tourism Pictures/mysore-palace.jpg" },
    { name: "Ranthambore National Park", price: 3000, rating: 4.7, reviews: 4567, image: "images/Tourism Pictures/ranthambore-park.jpg" },
    { name: "Hampi Ruins", price: 600, rating: 4.8, reviews: 3456, image: "images/Tourism Pictures/hampi-ruins.jpg" },
    { name: "Ladakh", price: 4000, rating: 4.9, reviews: 2345, image: "images/Tourism Pictures/ladakh.jpg" },
    { name: "Ellora Caves", price: 700, rating: 4.6, reviews: 3210, image: "images/Tourism Pictures/ellora-caves.jpg" },
    { name: "Sundarbans", price: 2800, rating: 4.5, reviews: 2109, image: "images/Tourism Pictures/sundarbans.jpg" },
    { name: "Khajuraho Temples", price: 900, rating: 4.7, reviews: 3567, image: "images/Tourism Pictures/Khajuraho Temples.jpg" },
    { name: "Darjeeling Tea Gardens", price: 1800, rating: 4.6, reviews: 4321, image: "images/Tourism Pictures/Darjeeling Tea Gardens.jpg" },
    { name: "Ajanta Caves", price: 750, rating: 4.8, reviews: 2876, image: "images/Tourism Pictures/Ajanta caves.jpg" },
    { name: "Udaipur City Palace", price: 1300, rating: 4.7, reviews: 5432, image: "images/Tourism Pictures/udayput-city-palace.jpg" },
    { name: "Andaman Islands", price: 3500, rating: 4.9, reviews: 3210, image: "images/Tourism Pictures/Andaman Islands.jpg" },
    { name: "Golden Temple, Amritsar", price: 500, rating: 4.9, reviews: 7890, image: "images/Tourism Pictures/golden-temple.jpg" },
    { name: "Kaziranga National Park", price: 2200, rating: 4.8, reviews: 2345, image: "images/Tourism Pictures/Kaziranga National Park.jpg" },
    { name: "Hebbe Falls", price: 400, rating: 4.5, reviews: 6543, image: "images/Tourism Pictures/hebbefalls.jpg" }

];

const reviews = [
    { name: "Priya S.", rating: 5, text: "Incredible experience at the Taj Mahal! The guide was knowledgeable and the tour was well-organized." },
    { name: "Rahul M.", rating: 4, text: "Loved the beaches in Goa. The hotel recommendations were spot on." },
    { name: "Sarah L.", rating: 5, text: "The Jaipur City Palace tour was amazing. So much history and beauty!" },
    { name: "Amit K.", rating: 4, text: "Varanasi was a spiritual experience. The evening aarti ceremony was unforgettable." },
    { name: "Emma W.", rating: 5, text: "Kerala backwaters cruise was so peaceful and scenic. Highly recommend!" },
    { name: "Raj P.", rating: 4, text: "Ranthambore safari was exciting. We saw tigers and many other animals." },
    { name: "Lisa T.", rating: 5, text: "Hampi's ruins were breathtaking. It felt like stepping back in time." },
    { name: "Vikram S.", rating: 4, text: "Loved the food tour in Delhi. So many flavors and delicious dishes!" },
];

const galleryImages = [
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-2.jpg",
    "images/Tourism Pictures/gallery-3.jpg",
    "images/Tourism Pictures/gallery-4.jpg",
    "images/Tourism Pictures/gallery-5.jpg",
    "images/Tourism Pictures/gallery-5.jpg",
    "images/Tourism Pictures/gallery-4.jpg",
    "images/Tourism Pictures/gallery-3.jpg",
    "images/Tourism Pictures/gallery-2.jpg",
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-1.jpg",
    "images/Tourism Pictures/gallery-2.jpg",

];



const destinationInfo = {
            // ... (Taj Mahal information)
    "Taj Mahal": {
        history: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Jaipur City Palace information)
    "Jaipur City Palace": {
        history: "The City Palace, Jaipur is a royal residence and former administrative headquarters of the rulers of the Jaipur State in Jaipur, Rajasthan. Construction started soon after the establishment of the city of Jaipur under the reign of Maharaja Sawai Jai Singh II, who moved his court to Jaipur from Amber, in 1727.Jaipur remained the capital of the kingdom until 1949—when it became the capital of the present-day Indian state of Rajasthan—with the City Palace functioning as the ceremonial and administrative seat of the Maharaja of Jaipur.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
        // ... (Goa Beaches information)
    "Goa Beaches": {
        history: "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats. It is bound by the Indian states of Maharashtra to the north, and Karnataka to the east and south, with the Arabian Sea in the west. It is India's smallest state by area and fourth-smallest by population. Goa has the highest GDP per capita among all Indian states,two and a half times as high as the GDP per capita of the country as a whole..",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Varanasi Ghats information)
    "Varanasi Ghats": {
        history: "Ghats in Varanasi are riverfront steps leading to the banks of the Ganges river. The city has 84 ghats. Most of the ghats are bathing and puja ceremonial ghats, while two ghats, Manikarnika and Harishchandra, are used exclusively as cremation sites.Most of the ghats in Varanasi were rebuilt in the 18th century under the maratha patronage. The patrons of current ghats are Maharajas of Benares, Marathas, Shindes (Scindias), Holkars, Bhonsles and Peshwes (Peshwas). Many ghats are associated with legends or mythologies while other ghats have private histories and users. A morning boat ride on the Ganges along the ghats is a popular visitor attraction.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kerala Backwaters information)
            "Kerala Backwaters": {
        history: "The Kerala backwaters are a network of brackish lagoons and canals lying parallel to the Arabian Sea of the Malabar coast of Kerala state in south-western India. It also includes interconnected lakes, rivers, and inlets, a labyrinthine system formed by more than 900 km (560 mi) of waterways, and sometimes compared to bayous.[3] The network includes five large lakes linked by canals, both man made and natural, fed by 38 rivers, and extending virtually half the length of Kerala state. The backwaters were formed by the action of waves and shore currents creating low barrier islands across the mouths of the many rivers flowing down from the Western Ghats range.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kerala Backwaters information)
"Amber Fort, Jaipur": {
        history: "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres (1.5 sq mi)located 11 kilometres (6.8 mi) from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur. Amer Fort is known for its artistic style elements. With its large ramparts and series of gates and cobbled paths, the fort overlooks Maota Lake, which is the main source of water for the Amer Palace.Amer Palace is great example of Rajput architecture. Some of its buildings and work have influence of Mughal architecture. Constructed of red sandstone and marble, the attractive, opulent palace is laid out on four levels, each with a courtyard.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Mysore Palace information)
"Mysore Palace": {
        history: "Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of the Palaces', and there are seven palaces including this one. However, the Mysore Palace refers specifically to the one within the new fort.The land on which the palace now stands was originally known as mysuru. The first palace inside the Old Fort was built in the 14th century, which was set ablaze and reconstructed multiple times. The Old Fort was built of wood and thus easily caught fire, while the current fort was built of stone, bricks and wood.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ranthambore National Park information)
"Ranthambore National Park": {
        history: "Ranthambore National Park covers a total area of 392 km2 (151 sq mi), including buffer zone. It harbours dry deciduous forests and open grassy meadow. The core area is about 275 km2 (106 sq mi). Ranthambore Tiger Reserve spreads over an area of 1,334 km2 (515 sq mi) at an elevation range of about 215–505 m (705–1,657 ft).Ranthambore Fort was built in the 10th century by Chauhan rulers at 210 m (700 ft) above the surrounding plain. Inside the fort are three red stone temples devoted to Ganesh, Shiva and Ramlalaji. There is a Digamber Jain temple of Sumatinatha and Sambhavanatha. The temples were constructed in the 12th and 13th centuries. Padam Talao is the largest of the many lakes in the park. A red sandstone Jogi Mahal is at the edge of the lake.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Hampi Ruins information)
"Hampi Ruins": {
        history: "Hampi also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in Hampi (City), Ballari district now Vijayanagara district, east-central Karnataka, India. Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra. Hampi continues as a religious centre, with the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city.Hampi was the capital of the Vijayanagara Empire from 1336 to 1565 (as Vijayanagara), when it was abandoned. It was a fortified city. Chronicles left by Persian and European travellers, particularly the Portuguese, say that Hampi was a prosperous, wealthy and grand city near the Tungabhadra River, with numerous temples, farms and trading markets.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ladakh information)
"Ladakh": {
        history: "Ladakh is a region administered by India as a union territory and constitutes an eastern portion of the larger Kashmir region that has been the subject of a dispute between India and Pakistan since 1947 and India and China since 1959. Ladakh is bordered by the Tibet Autonomous Region to the east, the Indian state of Himachal Pradesh to the south, both the Indian-administered union territory of Jammu and Kashmir and the Pakistan-administered Gilgit-Baltistan to the west, and the southwest corner of Xinjiang across the Karakoram Pass in the far north. It extends from the Siachen Glacier in the Karakoram range to the north to the main Great Himalayas to the south.[11][12] The eastern end, consisting of the uninhabited Aksai Chin plains, is claimed by the Indian Government as part of Ladakh, but has been under Chinese control.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ellora Caves information)
"Ellora Caves": {
        history: "The Ellora Caves are a UNESCO World Heritage Site in Aurangabad district, Maharashtra, India. It is one of the largest rock-cut Hindu temple cave complexes in the world, with artwork dating from the period 600–1000 CE, also including several Buddhist and Jain.The complex is a leading example of Indian rock-cut architecture, and several are not strictly caves in they have no roof. Cave 16 features the largest single monolithic rock excavation in the world, the Kailash temple,chariot-shaped monument dedicated to the god Shiva. The Kailash temple excavation also features sculptures depicting various Hindu deities as well as relief panels summarizing the two major Hindu epics. There are over 100 caves at the site, all excavated from the basalt cliffs in the Charanandri Hills, 34 of which are open to public. These consist of 17 Hindu 12 Buddhist and 5 Jain caves,each group representing deities and mythologies prevalent in the 1st millennium CE, as well as monasteries of each respective religion.",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Sundarbans information)
"Sundarbans": {
        history: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Spread across parts of India and Bangladesh, this forest is the largest Mangrove forest in the world. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels. Sundarbans is home to the world's largest area of mangrove forests. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans West (Bangladesh), Sundarbans South (Bangladesh), Sundarbans East (Bangladesh) and Sundarbans National Park (India).",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Khajuraho Temples information)
"Khajuraho Temples": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Darjeeling Tea Gardens information)
"Darjeeling Tea Gardens": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Ajanta Caves information)
"Ajanta Caves": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Udaipur City Palace information)
"Udaipur City Palace": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Andaman Islands information)
"Andaman Islands": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Golden Temple, Amritsar information)
"Golden Temple, Amritsar": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Kaziranga National Park information)
"Kaziranga National Park": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
            // ... (Hebbe Falls information)
"Hebbe Falls": {
        history: "",
        hotels: [
            { name: "The Oberoi Amarvilas", price: 25000, rating: 4.8 },
            { name: "Taj Hotel & Convention Centre", price: 12000, rating: 4.6 },
            { name: "ITC Mughal", price: 8000, rating: 4.5 }
        ],
        restaurants: [
            { name: "Peshawri", price: 2000, rating: 4.7 },
            { name: "Dasaprakash", price: 800, rating: 4.5 },
            { name: "Pinch of Spice", price: 1200, rating: 4.6 }
        ],
        cabs: [
            { name: "Ola", price: 500, rating: 4.3 },
            { name: "Uber", price: 550, rating: 4.4 },
            { name: "Local Taxi", price: 400, rating: 4.1 }
        ]
    },
    // ... (other destination information)
};

// DOM elements
const destinationsContainer = document.getElementById('destinationsContainer');
const reviewsContainer = document.getElementById('reviewsContainer');
const galleryContainer = document.getElementById('galleryContainer');
const showMoreBtn = document.getElementById('showMoreBtn');
const modal = document.getElementById('bookingModal');
const hotelBookingModal = document.getElementById('hotelBookingModal');
const restaurantBookingModal = document.getElementById('restaurantBookingModal');
const cabBookingModal = document.getElementById('cabBookingModal');
const paymentModal = document.getElementById('paymentModal');

let displayedDestinations = 8;

// Create destination card
function createDestinationCard(destination, index) {
    const card = document.createElement('div');
    card.className = 'destination animate__animated animate__fadeIn';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}">
        <div class="destination-info">
            <h3>${destination.name}</h3>
            <span class="price">₹${destination.price}</span>
            <span class="rating">★ ${destination.rating} (${destination.reviews} reviews)</span>
            <button class="book-btn" onclick="openModal('${destination.name}')">Book Now</button>
        </div>
    `;
    return card;
}

// Create review card
function createReviewCard(review, index) {
    const card = document.createElement('div');
    card.className = 'review animate__animated animate__fadeIn';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <h4>${review.name} ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</h4>
        <p>${review.text}</p>
    `;
    return card;
}

// Create gallery item
function createGalleryItem(imageSrc, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item animate__animated animate__fadeIn';
    item.style.animationDelay = `${index * 0.1}s`;
    item.innerHTML = `<img src="${imageSrc}" alt="Gallery image ${index + 1}">`;
    return item;
}




// Display destinations
function displayDestinations() {
    destinationsContainer.innerHTML = '';
    for (let i = 0; i < displayedDestinations && i < destinations.length; i++) {
        destinationsContainer.appendChild(createDestinationCard(destinations[i], i));
    }
    showMoreBtn.style.display = displayedDestinations >= destinations.length ? 'none' : 'block';
}

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach((review, index) => {
        reviewsContainer.appendChild(createReviewCard(review, index));
    });
}

function displayGallery() {
    galleryContainer.innerHTML = '';
    galleryImages.forEach((image, index) => {
        galleryContainer.appendChild(createGalleryItem(image, index));
    });
}

showMoreBtn.addEventListener('click', () => {
    displayedDestinations += 4;
    displayDestinations();
});

displayDestinations();
displayReviews();
displayGallery();





// Open booking modal
function openModal(destination) {
    const modalTitle = document.getElementById('modalTitle');
    const modalHistory = document.getElementById('modalHistory');
    const modalImage = document.getElementById('modalImage');
    
    modalTitle.textContent = destination;
    
    const info = destinationInfo[destination];
    if (info) {
        modalHistory.textContent = info.history;
        modalImage.src = destinations.find(d => d.name === destination).image;
        
        const hotelsList = document.getElementById('hotelsList');
        const restaurantsList = document.getElementById('restaurantsList');
        const cabsList = document.getElementById('cabsList');
        
        hotelsList.innerHTML = info.hotels.map(hotel => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${hotel.name}</h4>
                <p>₹${hotel.price} per night</p>
                <p>★ ${hotel.rating}</p>
                <button onclick="openHotelBookingModal('${destination}', '${hotel.name}', ${hotel.price})">Book Hotel</button>
            </div>
        `).join('');
        
        restaurantsList.innerHTML = info.restaurants.map(restaurant => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${restaurant.name}</h4>
                <p>Average cost: ₹${restaurant.price} for two</p>
                <p>★ ${restaurant.rating}</p>
                <button onclick="openRestaurantBookingModal('${destination}', '${restaurant.name}', ${restaurant.price})">Book Table</button>
            </div>
        `).join('');
        
        cabsList.innerHTML = info.cabs.map(cab => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${cab.name}</h4>
                <p>Estimated fare: ₹${cab.price}</p>
                <p>★ ${cab.rating}</p>
                <button onclick="openCabBookingModal('${destination}', '${cab.name}', ${cab.price})">Book Cab</button>
            </div>
        `).join('');
    } else {
        modalHistory.textContent = "Information for this destination is not available.";
        modalImage.src = "placeholder.jpg";
    }
    
    modal.style.display = 'block';
}

function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeModal(this.closest('.modal'));
    }
});

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    });
});



//Destination Booking
function openModal(destination) {
    const modalTitle = document.getElementById('modalTitle');
    const modalHistory = document.getElementById('modalHistory');
    const modalImage = document.getElementById('modalImage');
    const bookDestinationSection = document.getElementById('bookDestinationSection');
    
    modalTitle.textContent = destination;
    
    const info = destinationInfo[destination];
    if (info) {
        modalHistory.textContent = info.history;
        modalImage.src = destinations.find(d => d.name === destination).image;
        
        const hotelsList = document.getElementById('hotelsList');
        const restaurantsList = document.getElementById('restaurantsList');
        const cabsList = document.getElementById('cabsList');
        
        hotelsList.innerHTML = info.hotels.map(hotel => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${hotel.name}</h4>
                <p>₹${hotel.price} per night</p>
                <p>★ ${hotel.rating}</p>
                <button onclick="openHotelBookingModal('${destination}', '${hotel.name}', ${hotel.price})">Book Hotel</button>
            </div>
        `).join('');
        
        restaurantsList.innerHTML = info.restaurants.map(restaurant => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${restaurant.name}</h4>
                <p>Average cost: ₹${restaurant.price} for two</p>
                <p>★ ${restaurant.rating}</p>
                <button onclick="openRestaurantBookingModal('${destination}', '${restaurant.name}', ${restaurant.price})">Book Table</button>
            </div>
        `).join('');
        
        cabsList.innerHTML = info.cabs.map(cab => `
            <div class="option-item animate__animated animate__fadeIn">
                <h4>${cab.name}</h4>
                <p>Estimated fare: ₹${cab.price}</p>
                <p>★ ${cab.rating}</p>
                <button onclick="openCabBookingModal('${destination}', '${cab.name}', ${cab.price})">Book Cab</button>
            </div>
        `).join('');


// Set up the Book Destination section
        const destinationPackagePrice = destinations.find(d => d.name === destination).price;
        document.getElementById('destinationPackagePrice').textContent = `₹${destinationPackagePrice}`;
        
        const bookDestinationBtn = document.getElementById('bookDestinationBtn');
        bookDestinationBtn.onclick = function() {
            bookDestinationPackage(destination, destinationPackagePrice);
        };

        bookDestinationSection.style.display = 'block';
    } else {
        modalHistory.textContent = "Information for this destination is not available.";
        modalImage.src = "placeholder.jpg";
        bookDestinationSection.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function bookDestinationPackage(destination, price) {
    alert(`You are booking the entire package for ${destination} at ₹${price}. This feature will be available soon!`);
}

function bookDestination(destinationName, price) {
    alert(`You are booking ${destinationName} for ₹${price}. This feature is coming soon!`);
} 




// Hotel Booking Modal Functionality
let currentDestination = '';
let currentHotelName = '';
let currentHotelPrice = 0;

function openHotelBookingModal(destination, hotelName, hotelPrice) {
    currentDestination = destination;
    currentHotelName = hotelName;
    currentHotelPrice = hotelPrice;
    document.getElementById('hotelName').textContent = hotelName;
    document.getElementById('hotelPrice').textContent = `₹${hotelPrice} per night`;
    hotelBookingModal.style.display = 'block';
    modal.style.display = 'none';
}

document.getElementById('hotelBookingForm').onsubmit=function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.hotelName = currentHotelName;
    bookingDetails.pricePerNight = currentHotelPrice;
    openPaymentModal(bookingDetails, 'hotel');
}




// Restaurant Booking Modal Functionality
function openRestaurantBookingModal(destination, restaurantName, restaurantPrice) {
    currentDestination = destination;
    currentRestaurantName = restaurantName;
    currentRestaurantPrice = restaurantPrice;
    document.getElementById('restaurantName').textContent = restaurantName;
    document.getElementById('restaurantPrice').textContent = `Average cost: ₹${restaurantPrice} for two`;
    restaurantBookingModal.style.display = 'block';
    modal.style.display = 'none';
  }
  
  document.getElementById('restaurantBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.restaurantName = currentRestaurantName;
    bookingDetails.averageCost = currentRestaurantPrice;
    
    console.log('Restaurant Booking Details:', bookingDetails);
    alert('Restaurant table booked successfully! Thank you for your reservation.');
    
    closeModal(restaurantBookingModal);
    this.reset();
  }
  

  /*Restaurant Payment Methods*/
const restaurantBookingForm = document.getElementById('restaurantBookingForm');
const restaurantPaymentModal = document.getElementById('restaurantPaymentModal');
const bookingConfirmationModal = document.getElementById('bookingConfirmationModal');
const restaurantPaymentSpan = restaurantPaymentModal.getElementsByClassName('close')[0];
restaurantBookingForm.onsubmit = function(e) {
  e.preventDefault();
  restaurantPaymentModal.style.display = "block";
}
restaurantPaymentSpan.onclick = function() {
  restaurantPaymentModal.style.display = "none";
}
const restaurantPaymentForm = document.getElementById('restaurantPaymentForm');
restaurantPaymentForm.onsubmit = function(e) {
  e.preventDefault();
  restaurantPaymentModal.style.display = "none";
  bookingConfirmationModal.style.display = "block";
}

const closeConfirmation = document.getElementById('closeConfirmation');
closeConfirmation.onclick = function() {
  bookingConfirmationModal.style.display = "none";
  restaurantBookingForm.reset();
  restaurantPaymentForm.reset();
}
window.onclick = function(event) {
  if (event.target == restaurantPaymentModal) {
    restaurantPaymentModal.style.display = "none";
  }
  if (event.target == bookingConfirmationModal) {
    bookingConfirmationModal.style.display = "none";
  }
}


// Cab Booking Modal Functionality
function openCabBookingModal(destination, cabName, cabPrice) {
    currentDestination = destination;
    currentCabName = cabName;
    currentCabPrice = cabPrice;
    document.getElementById('cabName').textContent = cabName;
    document.getElementById('cabPrice').textContent = `Estimated fare: ₹${cabPrice}`;
    cabBookingModal.style.display = 'block';
    modal.style.display = 'none';
  }
  
  document.getElementById('cabBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.cabName = currentCabName;
    bookingDetails.estimatedFare = currentCabPrice;
    
    console.log('Cab Booking Details:', bookingDetails);
    alert('Cab booked successfully! Your ride will arrive at the specified time and location.');
    
    closeModal(cabBookingModal);
    this.reset();
  }

/*Cab Booking Payment Methods*/
const cabBookingForm = document.getElementById('cabBookingForm');
const cabPaymentModal = document.getElementById('cabPaymentModal');
const cabBookingConfirmationModal = document.getElementById('cabBookingConfirmationModal');
const cabPaymentSpan = cabPaymentModal.getElementsByClassName('close')[0];
cabBookingForm.onsubmit = function(e) {
  e.preventDefault();
  cabPaymentModal.style.display = "block";
}
cabPaymentSpan.onclick = function() {
  cabPaymentModal.style.display = "none";
}

const cabPaymentForm = document.getElementById('cabPaymentForm');
cabPaymentForm.onsubmit = function(e) {
  e.preventDefault();
  cabPaymentModal.style.display = "none";
  cabBookingConfirmationModal.style.display = "block";
}

const closeCabConfirmation = document.getElementById('closeCabConfirmation');
closeCabConfirmation.onclick = function() {
  cabBookingConfirmationModal.style.display = "none";
  cabBookingForm.reset();
  cabPaymentForm.reset();
}
window.onclick = function(event) {
  if (event.target == cabPaymentModal) {
    cabPaymentModal.style.display = "none";
  }
  if (event.target == cabBookingConfirmationModal) {
    cabBookingConfirmationModal.style.display = "none";
  }
}


//PAYMENT CARD DETAILS
let currentBookingDetails = {};
let currentBookingType = '';

function openPaymentModal(bookingDetails, bookingType) {
    currentBookingDetails = bookingDetails;
    currentBookingType = bookingType;
    
    let title, amount;
    switch(bookingType) {
        case 'hotel':
            title = `Payment for ${bookingDetails.hotelName}`;
            amount = bookingDetails.pricePerNight * bookingDetails.nights;
            break;
        case 'restaurant':
            title = `Payment for ${bookingDetails.restaurantName}`;
            amount = bookingDetails.averageCost;
            break;
        case 'cab':
            title = `Payment for ${bookingDetails.cabName}`;
            amount = bookingDetails.estimatedFare;
            break;
        default:
            title = 'Payment';
            amount = 0;
    }
    
    document.getElementById('paymentModalTitle').textContent = title;
    document.getElementById('paymentAmount').textContent = `Total Amount: ₹${amount}`;
    
    document.getElementById('userDetailsForm').style.display = 'block';
    document.getElementById('paymentOptions').style.display = 'none';
    document.getElementById('cardPaymentForm').style.display = 'none';
    
    document.getElementById('paymentModal').style.display = 'block';
}

document.getElementById('paymentUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userDetails = Object.fromEntries(new FormData(e.target));
    currentBookingDetails = { ...currentBookingDetails, ...userDetails };
    
    document.getElementById('userDetailsForm').style.display = 'none';
    document.getElementById('paymentOptions').style.display = 'block';
});

document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        const paymentMethod = this.getAttribute('data-payment');
        if (paymentMethod === 'credit-card' || paymentMethod === 'debit-card') {
            document.getElementById('paymentOptions').style.display = 'none';
            document.getElementById('cardPaymentForm').style.display = 'block';
        } else {
            processPayment(paymentMethod);
        }
    });
});

document.getElementById('cardDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const cardDetails = Object.fromEntries(new FormData(e.target));
    processPayment('card', cardDetails);
});



//FUNCTION TO PROCESS THE PAYMENT
let paymentData;
function processPayment(paymentMethod, cardDetails = {}) {
    const paymentData = {
        ...currentBookingDetails,
        paymentMethod: paymentMethod,
        cardDetails: cardDetails,
        bookingType: currentBookingType,
    };

    console.log('Payment details:', paymentData);
    fetch("hotel.php",{
        "method" : "POST",
        "headers":{
            "Content-Type":"application/json; charset=utf-8"
        },
        "body":JSON.stringify(paymentData)
    }).then(function(response){
        return response.text();
    }).then(function(data){
        console.log(data);
    })

    let message = `Payment successful via ${paymentMethod} for `;
    switch(currentBookingType) {
        case 'hotel':
            message += `${currentBookingDetails.hotelName} in ${currentBookingDetails.destination}!`;
            break;
        case 'restaurant':
            message += `${currentBookingDetails.restaurantName} in ${currentBookingDetails.destination}!`;
            break;
        case 'cab':
            message += `${currentBookingDetails.cabName} in ${currentBookingDetails.destination}!`;
            break;
        default:
            message += 'your booking!';
    }
    message += `\nThank you for your reservation, ${currentBookingDetails.paymentUserName}.`;
    message += `\nA confirmation email has been sent to ${currentBookingDetails.paymentUserEmail}.`;

    alert(message);

    // Send payment data to backend for database storage

}

function resetForms() {
    document.getElementById('hotelBookingForm').reset();
    document.getElementById('restaurantBookingForm').reset();
    document.getElementById('cabBookingForm').reset();
    document.getElementById('paymentUserForm').reset();
    document.getElementById('cardDetailsForm').reset();
}

document.getElementById('hotelBookingForm').onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingDetails = Object.fromEntries(formData.entries());
    
    bookingDetails.destination = currentDestination;
    bookingDetails.hotelName = currentHotelName;
    bookingDetails.pricePerNight = currentHotelPrice;
    
    openPaymentModal(bookingDetails, 'hotel');
}

function closeModal(modalElement) {
    if (modalElement) {
        modalElement.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        closeModal(this.closest('.modal'));
    }
});

//BOOK DESTINATION PAYMENT CARD DETAILS

var destinationPackageModal = document.getElementById("destinationPackageModal");
var packageConfirmationModal = document.getElementById("packageConfirmationModal");
var packageSpan = destinationPackageModal.getElementsByClassName("close")[0];
packageSpan.onclick = function() {
  destinationPackageModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == destinationPackageModal) {
    destinationPackageModal.style.display = "none";
  }
}
function openDestinationPackageModal(destination, price) {
  document.getElementById("packageModalTitle").textContent = `Book ${destination} Package`;
  destinationPackageModal.style.display = "block";
}
document.querySelectorAll(".book-destination-btn").forEach(button => {
  button.addEventListener("click", function() {
    const destination = this.getAttribute("data-destination");
    const price = this.getAttribute("data-price");
    openDestinationPackageModal(destination, price);
  });
});
document.querySelectorAll('input[name="packagePaymentMethod"]').forEach(input => {
  input.addEventListener("change", function() {
    document.getElementById("packageCardDetails").style.display = this.value.includes("card") ? "block" : "none";
    document.getElementById("packageBankingDetails").style.display = this.value === "net-banking" ? "block" : "none";
    document.getElementById("packageUpiDetails").style.display = this.value === "upi" ? "block" : "none";
  });
});

document.getElementById("packagePaymentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("packageName").value;
  const destination = document.getElementById("packageModalTitle").textContent.replace("Book ", "").replace(" Package", "");
  
  setTimeout(() => {
    destinationPackageModal.style.display = "none";
    document.getElementById("packageConfirmationMessage").textContent = `Your ${destination} package has been successfully booked, ${name}!`;
    packageConfirmationModal.style.display = "block";
  }, 1500);
});

document.getElementById("closePackageConfirmation").addEventListener("click", function() {
  packageConfirmationModal.style.display = "none";
});




//SEARCH INPUT
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
function filterDestinations(query) {
    return destinations.filter(destination => 
        destination.name.toLowerCase().includes(query.toLowerCase())
    );
}
function displaySearchResults(results) {
    destinationsContainer.innerHTML = '';
    if (results.length === 0) {
        destinationsContainer.innerHTML = '<p class="no-results">No destination found</p>';
    } else {
        results.forEach((destination, index) => {
            destinationsContainer.appendChild(createDestinationCard(destination, index));
        });
    }
    showMoreBtn.style.display = 'none';
}

searchButton.addEventListener('click', function() {
    const query = searchInput.value.trim();
    if (query) {
        const searchResults = filterDestinations(query);
        displaySearchResults(searchResults);
    } else {
        displayDestinations();
    }
});

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchButton.click();
    }
});

searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (query === '') {
        displayDestinations();
    }
});

function displayDestinations() {
    destinationsContainer.innerHTML = '';
    for (let i = 0; i < displayedDestinations && i < destinations.length; i++) {
        destinationsContainer.appendChild(createDestinationCard(destinations[i], i));
    }
    showMoreBtn.style.display = displayedDestinations >= destinations.length ? 'none' : 'block';
}
displayDestinations(); 