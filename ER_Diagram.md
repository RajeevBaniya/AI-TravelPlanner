

## ER Diagram 

This diagram uses Crow's Foot notation to clearly define the relationships and cardinality between entities.

```mermaid
erDiagram
    USER {
        string userEmail PK "Email (Primary Key)"
        string name
        string picture
    }

    TRIP {
        string id PK "Trip ID (Primary Key)"
        string userEmail FK "User's Email (Foreign Key)"
        object location
        number noOfDays
        string budget
        string traveler
    }

    HOTEL {
        string hotelName PK "Hotel Name (Primary Key)"
        string tripId FK "Trip ID (Foreign Key)"
        string hotelAddress
        string price
        number rating
    }

    ITINERARY_DAY {
        number day PK "Day Number (Primary Key)"
        string tripId FK "Trip ID (Foreign Key)"
    }

    PLACE {
        string placeName PK "Place Name (Primary Key)"
        number day FK "Day Number (Foreign Key)"
        string tripId FK "Trip ID (Foreign Key)"
        string placeDetails
        string ticketPricing
    }

    USER ||--|{ TRIP : "creates"
    TRIP ||--|{ HOTEL : "has suggested"
    TRIP ||--|{ ITINERARY_DAY : "is composed of"
    ITINERARY_DAY ||--|{ PLACE : "includes"
```

## Entities and Attributes

Here is a detailed breakdown of each entity's attributes.

### 1. User
| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **userEmail** | `String` | **Primary Key.** The unique email address of the user. |
| name | `String` | The user's full name. |
| picture | `String` | URL to the user's profile picture. |

### 2. Trip
| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **id** | `String` | **Primary Key.** A unique identifier for the trip. |
| *userEmail* | `String` | **Foreign Key.** References the `User`. |
| location | `Object` | The destination of the trip. |
| noOfDays | `Number` | The duration of the trip in days. |
| budget | `String` | The user's budget for the trip. |
| traveler | `String` | The number or type of travelers. |

### 3. Hotel
| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **hotelName** | `String` | **Primary Key.** The name of the hotel. |
| *tripId* | `String` | **Foreign Key.** References the `Trip`. |
| hotelAddress | `String` | The physical address of the hotel. |
| price | `String` | The price range of the hotel. |
| rating | `Number` | The hotel's rating. |

### 4. ItineraryDay
| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **day** | `Number` | **Primary Key.** The day number of the itinerary. |
| *tripId* | `String` | **Foreign Key.** References the `Trip`. |

### 5. Place
| Attribute | Data Type | Description |
| :--- | :--- | :--- |
| **placeName** | `String` | **Primary Key.** The name of the place. |
| *day* | `Number` | **Foreign Key.** References the `ItineraryDay`. |
| *tripId* | `String` | **Foreign Key.** References the `Trip`. |
| placeDetails | `String` | A description of the place. |
| ticketPricing | `String` | Information about ticket prices. |
