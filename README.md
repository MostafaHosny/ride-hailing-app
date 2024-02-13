# Ride-Hailing Offer Aggregator.

## Description

The Ride-Hailing Aggregator project has a single-page `client-app`: application designed to aggregate and display various ride-hailing providers. Built with Next.js and styled using Tailwind CSS along with daisyUI.
`Backend` server is developed using NestJS, a Node.js framework for building server-side applications. It fetches ride offers from a static JSON file, simulating a real-world scenario where offers might be fetched from an external API. The server provides an endpoint `/rides` that the frontend consumes to retrieve and display the aggregated ride offers.

## Setup & Installation

Before you begin, ensure you have `Node.js` installed on your system to use npm (Node Package Manager).

### Getting Started

**Clone the repository**

   Start by cloning the repository to your local machine. You can do this by running:

```bash
    git clone git@github.com:MostafaHosny/ride-hailing-app.git
```
```bash
    cd ride-hailing-app
```

# Backend
## Installation

```bash
# change dir to /backend
$ cd backend
```

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
## Available Endpoint

### Get Rides

Retrieves a list of aggregated ride offers from different providers.

- **Request:** `GET http://localhost:3001/rides`

- **Response:**

  - **Status Code:** `200 OK`
  - **Data Example:**

    ```json
    {
        "rides": [
          {
            "provider": "Uber",
            "price": 25.98,
            "duration": "15 mins",
            "typeOfCar": "Sedan"
          },
          {
            "provider": "Bolt",
            "priceRange": {
              "lowPrice": 18.98,
              "highPrice": 30
            },
            "duration": "18 mins",
            "typeOfCar": "Compact"
          },
          {
            "provider": "Lyft",
            "price": 22,
            "duration": "20 mins",
            "typeOfCar": "SUV"
          }
        ]
    }
    ```

This endpoint provides a JSON response containing an array of ride offers. Each offer includes details such as the provider, price (or price range for variable pricing models), duration of the ride, and the type of car.

# Client-App

## Installation

```bash
# change dir to /client-app
$ cd client-app
```

```bash
$ npm install
```

Then run the app

```bash
npm run dev
# or
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the Available rides.