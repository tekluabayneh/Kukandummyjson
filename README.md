# Kukandummyjson API Data Provider
Kukandummyjson is a simple mock API provider offering easy access to various types of test data, including quotes, user posts, and products. The API is secured with an API key for authentication and can be used to fetch data for development or testing purposes.

Features
API Key Authentication: Secure API access with API keys.
Data Types: Fetch quotes, user posts, and products.
Mock Data: Ready-to-use data for development.
Endpoints

Quotes: 'http://localhost:8000/quotes?api_key=your_api-key'
Fetch a random quote with the author.

User Posts: /api/posts
Retrieve a list of mock user posts.

Products:http://localhost:8000/product?api_key=your_api-key
Get mock product details.

Usage
Start the Server:

npm install
npm start
Make Requests:

Include your API key in the query url:


Using fetch to get quotes:

  fetch('http://localhost:8000/users?api_key=your_api-key')
    .then(res=>res.json())
    .then(json=>console.log(json))
    
License
MIT License.








