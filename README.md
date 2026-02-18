Crypto dashboard that uses the coingecko API to display basic details. 

This project includes a custom Express proxy server to avoid CORS issues when fetching data from the API.

## What It Does

- Displays live crypto prices and market data  
- Fetches data from the CoinGecko API  
- Uses a custom proxy server to handle API requests  

## How the Proxy Works

Instead of calling the CoinGecko API directly from the browser, the frontend sends requests to a local Express server.

The Express server forwards the request to CoinGecko and returns the data back to the frontend.

Flow:

Frontend → Express Server → CoinGecko API → Express Server → Frontend

This prevents CORS errors during development.

## How to Run the App

1. Clone the repository

git clone https://github.com/Basewrecker/crypto_v1_ffp.git
cd crypto_v1_ffp

2. Start the server

cd server
npm install
node index.js

The server runs on http://localhost:5000 (this can be changed be if you're on a mac and it interfers with the airport express card; change it via the server config settings)

3. Start the frontend

Open a new terminal:

cd client
npm install
npm run dev

The frontend runs on http://localhost:5173

Make sure the server is running before starting the frontend.
