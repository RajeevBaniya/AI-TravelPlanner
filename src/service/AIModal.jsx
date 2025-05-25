import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 30,\n        \"max\": 80\n      },\n      \"hotelImageUrl\": \"https://example.com/circuscircus.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1215,\n        \"longitude\": -115.1726\n      },\n      \"rating\": 3.5,\n      \"description\": \"A budget-friendly option with a circus theme, featuring a midway and various entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Westgate Las Vegas Resort & Casino\",\n      \"hotelAddress\": \"3000 Paradise Rd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 40,\n        \"max\": 100\n      },\n      \"hotelImageUrl\": \"https://example.com/westgate.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.1211,\n        \"longitude\": -115.1440\n      },\n      \"rating\": 4.0,\n      \"description\": \"Offers a variety of rooms and amenities at relatively affordable prices.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\n        \"min\": 35,\n        \"max\": 90\n      },\n      \"hotelImageUrl\": \"https://example.com/excalibur.jpg\",\n      \"geoCoordinates\": {\n        \"latitude\": 36.0910,\n        \"longitude\": -115.1739\n      },\n      \"rating\": 3.8,\n      \"description\": \"Medieval-themed hotel with affordable rooms and a location on the Strip.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Free outdoor entertainment, light shows, zip lines.\",\n          \"placeImageUrl\": \"https://example.com/fremontstreet.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1699,\n            \"longitude\": -115.1404\n          },\n          \"ticketPricing\": \"Free (some activities may have extra costs)\",\n          \"rating\": 4.2,\n          \"timeTravel\": \"Evening (Best time to see the light shows)\"\n        },\n        {\n          \"placeName\": \"Downtown Container Park\",\n          \"placeDetails\": \"Unique shopping and dining experience with repurposed shipping containers.\",\n          \"placeImageUrl\": \"https://example.com/containerpark.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1692,\n            \"longitude\": -115.1361\n          },\n          \"ticketPricing\": \"Free entry (shopping and dining costs extra)\",\n          \"rating\": 4.0,\n          \"timeTravel\": \"Afternoon/Evening\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"plan\": [\n        {\n          \"placeName\": \"The Strip (walking tour)\",\n          \"placeDetails\": \"Walk the length of the Strip, see the famous hotels and casinos.\",\n          \"placeImageUrl\": \"https://example.com/thestrip.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1146,\n            \"longitude\": -115.1729\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Morning to Afternoon\"\n        },\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n          \"placeDetails\": \"Stunning seasonal displays of flowers and plants (free)\",\n          \"placeImageUrl\": \"https://example.com/bellagiogardens.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1117,\n            \"longitude\": -115.1747\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"timeTravel\": \"Afternoon\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Spectacular water, music, and light show (free)\",\n          \"placeImageUrl\": \"https://example.com/bellagiofountains.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1117,\n            \"longitude\": -115.1747\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.7,\n          \"timeTravel\": \"Evening\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"plan\": [\n        {\n          \"placeName\": \"Seven Magic Mountains\",\n          \"placeDetails\": \"Colorful art installation south of Las Vegas (requires transportation)\",\n          \"placeImageUrl\": \"https://example.com/sevenmagicmountains.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.0014,\n            \"longitude\": -114.9590\n          },\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.3,\n          \"timeTravel\": \"Afternoon\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"See preserved Las Vegas signs from the past (admission fee applies)\",\n          \"placeImageUrl\": \"https://example.com/neonmuseum.jpg\",\n          \"geoCoordinates\": {\n            \"latitude\": 36.1641,\n            \"longitude\": -115.1410\n          },\n          \"ticketPricing\": \"Around $25\",\n          \"rating\": 4.4,\n          \"timeTravel\": \"Late afternoon/Evening\"\n        }\n      ]\n    }\n  }\n}\n```"},
        ],
      },
    ],
  });

