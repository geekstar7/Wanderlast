# Wanderlust – Travel Destination Explorer

Wanderlust is a dynamic web application that helps users discover travel destinations and attractions worldwide. It integrates with the **OpenTripMap API** to provide real-time information about cities, points of interest, and attractions, complete with images and details.  

**🌐 Live Demo:** [https://wanderlast-alpha.vercel.app](https://your-vercel-app.vercel.app)

---

## 🚀 Features

- **Dynamic City Search** – Search for any city globally and explore its attractions.  
- **Attraction Details** – View detailed information, ratings, and images for each point of interest.  
- **Responsive Design** – Fully responsive for desktop, tablet, and mobile devices.  
- **Filtering & Sorting** – Sort destinations by rating, name, country, or reviews.  
- **Interactive Modals** – Click on a destination to open a modal with detailed info.  
- **Hero Section with Search Bar** – Quick access to explore cities instantly.  

---

## 🛠 Technology Stack

- **Frontend:** React, TypeScript, Vite  
- **Styling:** Tailwind CSS  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Data Fetching:** Axios, React Query  
- **API:** [OpenTripMap API](https://opentripmap.io/)  FAILED (working on it)
- **Routing:** React Router DOM  
- **Components:** Custom UI components, Radix UI  

---

## 🔗 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/wanderlust.git
   cd wanderlust
Install dependencies:

npm install


Create a .env file in the root and add your OpenTripMap API key:

VITE_OPENTRIP_API_KEY=your_api_key_here


Run the development server:

npm run dev