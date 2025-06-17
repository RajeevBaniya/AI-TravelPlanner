# ER Diagram for the AI Travel Planner

This document outlines the Entity-Relationship (ER) diagram for the AI Travel Planner application. It provides a visual representation of the data model, including the entities, their attributes, and the relationships between them.

## Entities and Attributes

### 1. User

Represents the users of the application who can create and manage travel plans.

| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **userEmail** | `String` | **Primary Key.** The unique email address of the user, obtained from Google authentication. |
| name | `String` | The user's full name. |
| picture | `String` | URL to the user's profile picture. |
| given_name | `String` | The user's first name. |
| family_name | `String` | The user's last name. |

### 2. Trip

Represents a travel plan created by a user.

| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **id** | `String` | **Primary Key.** A unique identifier for the trip, generated from the current timestamp. |
| *userEmail* | `String` | **Foreign Key.** References the `userEmail` in the `User` entity. |
| location | `Object` | The destination of the trip (e.g., `{ "label": "Paris, France", "value": { ... } }`). |
| noOfDays | `Number` | The duration of the trip in days. |
| budget | `String` | The user's budget for the trip (e.g., "Cheap", "Moderate", "Luxury"). |
| traveler | `String` | The number or type of travelers (e.g., "1", "2 People"). |

### 3. Hotel

Represents a hotel suggestion for a trip. This is part of the `tripData` JSON object but is modeled as a separate entity for clarity.

| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **hotelName** | `String` | **Primary Key (within the context of a trip).** The name of the hotel. |
| *tripId* | `String` | **Foreign Key.** References the `id` in the `Trip` entity. |
| hotelAddress | `String` | The physical address of the hotel. |
| price | `String` | The price range or cost of the hotel. |
| hotelImageUrl | `String` | A URL to an image of the hotel. |
| geoCoordinates | `Object` | The geographical coordinates of the hotel (latitude and longitude). |
| rating | `Number` | The hotel's rating. |
| description | `String` | A brief description of the hotel. |

### 4. ItineraryDay

Represents a single day in the trip's itinerary.

| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **day** | `Number` | **Primary Key (within the context of a trip).** The day number of the itinerary (e.g., 1, 2, 3). |
| *tripId* | `String` | **Foreign Key.** References the `id` in the `Trip` entity. |

### 5. Place

Represents a place to visit on a specific day of the itinerary.

| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **placeName** | `String` | **Primary Key (within the context of a day).** The name of the place. |
| *day* | `Number` | **Foreign Key.** References the `day` in the `ItineraryDay` entity. |
| *tripId* | `String` | **Foreign Key.** References the `id` in the `Trip` entity. |
| placeDetails | `String` | A description of the place. |
| placeImageUrl | `String` | A URL to an image of the place. |
| geoCoordinates | `Object` | The geographical coordinates of the place. |
| ticketPricing | `String` | Information about ticket prices. |
| timeToTravel | `String` | The best time to visit the place. |

## Relationships

*   **User to Trip**: A `User` can have multiple `Trips`. This is a **one-to-many** relationship.
    *   `User` (1) ---< `Trip` (N)
*   **Trip to Hotel**: A `Trip` can have multiple suggested `Hotels`. This is a **one-to-many** relationship.
    *   `Trip` (1) ---< `Hotel` (N)
*   **Trip to ItineraryDay**: A `Trip` consists of multiple `ItineraryDays`. This is a **one-to-many** relationship.
    *   `Trip` (1) ---< `ItineraryDay` (N)
*   **ItineraryDay to Place**: An `ItineraryDay` can include multiple `Places` to visit. This is a **one-to-many** relationship.
    *   `ItineraryDay` (1) ---< `Place` (N)

## ER Diagram

```mermaid
erDiagram
    USER {
        string userEmail PK
        string name
        string picture
        string given_name
        string family_name
    }

    TRIP {
        string id PK
        string userEmail FK
        object location
        number noOfDays
        string budget
        string traveler
    }

    HOTEL {
        string hotelName PK
        string tripId FK
        string hotelAddress
        string price
        string hotelImageUrl
        object geoCoordinates
        number rating
        string description
    }

    ITINERARY_DAY {
        number day PK
        string tripId FK
    }

    PLACE {
        string placeName PK
        number day FK
        string tripId FK
        string placeDetails
        string placeImageUrl
        object geoCoordinates
        string ticketPricing
        string timeToTravel
    }

    USER ||--o{ TRIP : "creates"
    TRIP ||--o{ HOTEL : "suggests"
    TRIP ||--o{ ITINERARY_DAY : "has"
    ITINERARY_DAY ||--o{ PLACE : "contains"