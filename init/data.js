const hotelListings = [
  {
    title: "Hotel Blue Orchid",
    description: "A 4-star hotel offering luxurious rooms, complimentary breakfast, and free Wi-Fi. Located near city center with mountain views.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "MG Road, Gangtok",
    country: "India"
  },
  {
    title: "The Grand Taj",
    description: "Elegant rooms, rooftop dining, and close to the Taj Mahal. Ideal for family stays and romantic getaways.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4800,
    location: "Fatehabad Road, Agra",
    country: "India"
  },
  {
    title: "Sea Breeze Inn",
    description: "Affordable beachside hotel with AC rooms and sea-view balconies. Walking distance from the beach and nightlife.",
    image:  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Calangute, Goa",
    country: "India"
  },
  {
    title: "Desert Mirage Hotel",
    description: "Luxury hotel in the heart of the desert. Camel rides and cultural performances included.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3900,
    location: "Sam Sand Dunes, Jaisalmer",
    country: "India"
  },
  {
    title: "Royal Heritage Palace",
    description: "Stay in a converted royal palace with antique furniture and regal ambiance.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5200,
    location: "City Palace Road, Udaipur",
    country: "India"
  },
  {
    title: "Hilltop Resort",
    description: "A peaceful retreat surrounded by pine forests and stunning valley views.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Kasauli Hills, Himachal",
    country: "India"
  },
  {
    title: "Urban Comfort Hotel",
    description: "Modern business hotel near the airport with meeting rooms and 24x7 concierge.",
    image:  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4100,
    location: "Andheri East, Mumbai",
    country: "India"
  },
  {
    title: "Lakeside Serenity",
    description: "Scenic lakeside resort offering kayaking and bonfires. Ideal for couples.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3300,
    location: "Pichola Lake, Udaipur",
    country: "India"
  },
  {
    title: "Evergreen Eco Stay",
    description: "Sustainable eco-hotel with organic meals and forest treks.",
    image:  "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Wayanad, Kerala",
    country: "India"
  },
  {
    title: "Snow Peak Hotel",
    description: "Ski lodge-style hotel near the slopes with heated rooms and scenic balconies.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3600,
    location: "Solang Valley, Manali",
    country: "India"
  },
  {
    title: "Lotus Beach Resort",
    description: "Tropical resort with beach-facing cottages and yoga sessions.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3700,
    location: "Varkala Beach, Kerala",
    country: "India"
  },
  {
    title: "Mountain View Lodge",
    description: "Small family-run lodge with panoramic mountain views and home-cooked meals.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "The Urban Nest",
    description: "Boutique hotel in city center with rooftop café and artistic interiors.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2900,
    location: "Connaught Place, Delhi",
    country: "India"
  },
  {
    title: "Riverside Escape",
    description: "Luxury tents and cottages by the river. Includes rafting and bonfire nights.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Palm Paradise",
    description: "Beach resort with palm tree gardens, spa, and private cabanas.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Palolem, Goa",
    country: "India"
  },
  {
    title: "Silicon Suites",
    description: "Business-class hotel with conference rooms and tech-enabled services.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Whitefield, Bangalore",
    country: "India"
  },
  {
    title: "Green Valley Hotel",
    description: "Surrounded by tea gardens, offering nature walks and plantation tours.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Munnar, Kerala",
    country: "India"
  },
  {
    title: "CityLite Residency",
    description: "Affordable stay for travelers. Near metro station and shopping malls.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Dwarka, Delhi",
    country: "India"
  },
  {
    title: "Rainforest Retreat",
    description: "Jungle cabins with wildlife safaris and birdwatching tours.",
    image:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3400,
    location: "Jim Corbett, Uttarakhand",
    country: "India"
  },
  {
    title: "Moonlight Guesthouse",
    description: "Simple, clean rooms ideal for backpackers. Community kitchen available.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Kasol, Himachal",
    country: "India"
  },
  {
    title: "Sunrise Stay",
    description: "Panoramic view rooms with sunrise breakfast served on balcony.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Mussoorie, Uttarakhand",
    country: "India"
  },
  {
    title: "Island Breeze Hotel",
    description: "Exotic island hotel with water activities and seafood restaurant.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Havelock Island, Andaman",
    country: "India"
  },
  {
    title: "Cultural Courtyard",
    description: "Traditional haveli-style hotel with folk performances every evening.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Pushkar, Rajasthan",
    country: "India"
  },
  {
    title: "Lavender Hills",
    description: "Romantic getaway with floral gardens and candlelight dinners.",
    image:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3900,
    location: "Coonoor, Tamil Nadu",
    country: "India"
  },
  {
    title: "MetroView Hotel",
    description: "Perfect for business travelers. Walking distance from metro station.",
    image:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Rajouri Garden, Delhi",
    country: "India"
  },
  {
    title: "Orchid Villa",
    description: "Private villa with garden, pool, and personal chef on request.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 6500,
    location: "Lonavala",
    country: "India"
  },
  {
    title: "Tranquil Heights",
    description: "Serene mountain lodge with meditation decks and fresh air.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Tawang, Arunachal Pradesh",
    country: "India"
  },
  {
    title: "Backwater Breeze",
    description: "Floating houseboat experience with meals and Kerala backwater tours.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4700,
    location: "Alleppey, Kerala",
    country: "India"
  },
  {
    title: "City Square Hotel",
    description: "Mid-range hotel near shopping centers, with gym and rooftop lounge.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3100,
    location: "Banjara Hills, Hyderabad",
    country: "India"
  },
  {
    title: "Windsor Comfort",
    description: "Classic British-themed hotel with cozy interiors and English breakfast.",
    image:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Ooty, Tamil Nadu",
    country: "India"
  }
];


module.exports = { data: hotelListings };