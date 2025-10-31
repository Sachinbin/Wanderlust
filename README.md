🏡 Wanderlust – Airbnb Clone

Wanderlust is a full-stack web application inspired by Airbnb.
It allows users to explore, create, and manage property listings — complete with authentication, image uploads, and reviews.

🚀 Features

🌍 Browse Listings: View all available destinations with details and images.

🏠 Create & Manage Listings: Logged-in users can add, edit, and delete their own listings.

🖼️ Image Uploads: Integrated with Cloudinary and Multer for secure image hosting.

💬 Reviews & Ratings: Users can post, edit, and delete reviews for listings.

🔐 User Authentication: Signup/Login using Passport.js with session management.

⚙️ Error Handling: Custom middleware for clean error responses.

🎨 Responsive UI: Designed with EJS templates, CSS, and Bootstrap.

🧰 Tech Stack
Layer	Technology
Frontend	EJS, HTML, CSS, JavaScript, Bootstrap
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Authentication	Passport.js
Image Upload	Multer + Cloudinary
Hosting	(Optional: Render / Vercel / Railway)
⚙️ Installation & Setup

Follow these steps to run Wanderlust locally 👇

1️⃣ Clone the Repository
git clone https://github.com/Sachinbin/Wanderlust.git
cd Wanderlust

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Create a new file named .env in your project root and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key

4️⃣ Run the App
node app.js


or (for development with live reload)

npx nodemon app.js

5️⃣ Open in Browser

Visit 👉 http://localhost:3000

📂 Project Structure
Wanderlust/
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
│
├── controllers/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   ├── listing/
│   ├── user/
│   └── include/
│
├── public/
│   ├── css/
│   └── js/
│
└── utils/
    ├── ExpressError.js
    └── wrapAsync.js

🌐 Environment & Dependencies

Main dependencies:

express

mongoose

ejs

method-override

connect-flash

express-session

passport

passport-local

multer

cloudinary

dotenv

🤝 Contributors

Developed by:

Sachin Bind

Anil Reddy

Vaibhav Gharat
🎓 Department of Computer Science Engineering (IoT),
A. C. Patil College of Engineering, Mumbai University

🪄 Future Enhancements

Add booking system with dates and payments

Integrate Google OAuth for login

Deploy to Render/Vercel

Improve mobile UI

📜 License

This project is open source and available under the MIT License
.
