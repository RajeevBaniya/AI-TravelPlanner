# Travel AI - An AI-based Travel planner

Live: - https://travelai-app.vercel.app

Travel AI is a modern web application that leverages Google's Generative AI to create personalized travel itineraries based on your preferences, budget and travel style.

## Features

- **AI-Generated Travel Plans**: Get detailed itineraries tailored to your specific needs
- **Personalized Recommendations**: Discover hotels, attractions, and activities based on your preferences
- **User Authentication**: Securely save and access your travel plans
- **Responsive Design**: Enjoy a seamless experience across all devices


##  Technologies Used

- **Frontend**: React, React Router
- **Styling**: Tailwind CSS, Framer Motion for animations
- **Authentication**: Google OAuth
- **AI Integration**: Gemini AI
- **Database**: Firebase Firestore
- **Build Tool**: Vite
- **APIs**: Google Places API

##  Project Structure

```
travel-ai/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── custom/      # Custom components
│   │   └── ui/          # UI components
│   ├── constants/       # Application constants
│   ├── create-trip/     # Trip creation page
│   ├── my-trips/        # User's saved trips page
│   ├── view-trip/       # Trip details page
│   ├── service/         # API and service integrations
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── index.html           # HTML entry point
└── package.json         # Project dependencies
```

##  Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google API keys (Places API, Gemini AI)
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travel-ai.git
   cd travel-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_GOOGLE_PLACE_API_KEY=your_google_place_api_key
   VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_ai_api_key
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

##  Build for Production

```bash
npm run build
# or
yarn build
```


