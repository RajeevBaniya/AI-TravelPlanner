# ER Diagram for the AI Travel Planner

This document outlines the Entity-Relationship (ER) diagram for the AI Travel Planner application. It provides a visual representation of the data model, including the entities, their attributes, and the relationships between them.

## Simple Explanation

Think of your app's data as being organized into several boxes, where each box holds a specific type of information. The ER diagram shows what these boxes are and how they are connected.

### The Boxes (Entities)

1.  **USER**: This box holds information about the people using your app. We identify each user by their unique `userEmail`.
2.  **TRIP**: This is the main box for a travel plan. Each time a user creates a new plan, a new `Trip` is made with a unique `id`. It stores the user's choices, like the `location`, `budget`, and number of `noOfDays`.
3.  **HOTEL**: This box contains the list of hotels suggested for a specific `Trip`.
4.  **ITINERARY_DAY**: This box breaks down a `Trip` into individual days. For example, a 5-day trip will have 5 `ItineraryDay` entries.
5.  **PLACE**: This box holds the details of a single tourist spot or activity, like the Eiffel Tower. Each `Place` is part of a specific `ItineraryDay`.

### The Connections (Relationships)

The lines connecting the boxes show how they relate to each other:

*   A **USER** can create many **TRIPs**.
*   Each **TRIP** has a list of suggested **HOTELs**.
*   Each **TRIP** is made up of several **ITINERARY_DAYs**.
*   Each **ITINERARY_DAY** contains a list of **PLACEs** to visit.

In short, the diagram shows that a user creates a trip, and that trip contains all the details: hotels, daily plans, and places to visit.

## Formal ER Diagram (Crow's Foot Notation)

This diagram uses Crow's Foot notation to clearly illustrate the relationships and cardinalities between the entities.

```mermaid
erDiagram
    USER {
        string userEmail PK "User's Email"
        string name "User's Full Name"
        string picture "URL to Profile Picture"
        string given_name "User's First Name"
        string family_name "User's Last Name"
    }

    TRIP {
        string id PK "Unique Trip ID"
        string userEmail FK "User's Email"
        object location "Destination"
        number noOfDays "Duration in Days"
        string budget "Trip Budget"
        string traveler "Number of Travelers"
    }

    HOTEL {
        string hotelName PK "Hotel Name"
        string tripId FK "Trip ID"
        string hotelAddress "Hotel Address"
        string price "Price Range"
        string hotelImageUrl "URL to Hotel Image"
        object geoCoordinates "Geographical Coordinates"
        number rating "Hotel Rating"
        string description "Hotel Description"
    }

    ITINERARY_DAY {
        number day PK "Day of Itinerary"
        string tripId FK "Trip ID"
    }

    PLACE {
        string placeName PK "Name of the Place"
        number day FK "Day of Itinerary"
        string tripId FK "Trip ID"
        string placeDetails "Description of the Place"
        string placeImageUrl "URL to Place Image"
        object geoCoordinates "Geographical Coordinates"
        string ticketPricing "Ticket Pricing"
        string timeToTravel "Best Time to Visit"
    }

    USER ||--|{ TRIP : "creates"
    TRIP ||--|{ HOTEL : "suggests"
    TRIP ||--|{ ITINERARY_DAY : "has"
    ITINERARY_DAY ||--|{ PLACE : "contains"
