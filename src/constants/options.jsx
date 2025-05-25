export const SelectTravelesList = [
    {
      id: 1,
      title: 'Just Me',
      desc: 'A sole traveles in exploration',
      icon: '✈️',
      people: '1'
    },
    {
      id: 2,
      title: 'A Couple',
      desc: 'Two traveles in tandem',
      icon: '👫',
      people: '2 People'
    },
    {
      id: 3,
      title: 'Family',
      desc: 'A group of fun loving adventurers',
      icon: '🏠',
      people: '4 to 7 People'
    },
    {
      id: 4,
      title: 'Friends',
      desc: 'A bunch of thrill-seekes',
      icon: '⛵',
      people: '5 to 10 People'
    },
]
  
export const SelectBudgetOptions = [
    {
      id: 1,
      title: 'Cheap',
      desc: 'Stay conscious of costs',
      icon: '💵',
    },
    {
      id: 2,
      title: 'Moderate',
      desc: 'Keep cost on the average side',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Luxury',
      desc: 'Dont worry about cost',
      icon: '💸',
    },
]
  
// export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me at least 4 Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'
export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget (choose from Cheap: $0–$30, Moderate: $31–$70, Luxury: $71 and above). Provide at least 4 hotel options with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions, and suggest an itinerary with placeName, Place Details, Place Image URL, Geo Coordinates, ticket Pricing, and Time travel for each location for {totalDays} days with a daily plan including the best time to visit in JSON format.';