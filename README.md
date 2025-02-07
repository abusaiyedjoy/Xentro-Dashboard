# XentroBD Dashboard

[Live Demo](https://xentrobd-dashboard.netlify.app)

## Overview
XentroBD Dashboard is a responsive web application that allows users to manage products through CRUD operations. The dashboard fetches product data from an API, displays it in a table, and provides functionalities to search, add, and delete products.

## Features
- **Fetch Products**: Retrieves a list of products from the API.
- **Search Functionality**: Users can search products by name.
- **Add a Product**: Users can add a new product to the API.
- **Delete a Product**: Users can remove products from the API.
- **Fully Responsive**: Optimized for all screen sizes.

## Technologies Used
- **React.js**: Frontend framework
- **Tailwind CSS**: Styling
- **Fetch API**: API calls (without Axios)

## API Endpoints
- **GET**: `https://jsonplaceholder.typicode.com/users` (Fetch all users)
- **GET**: `https://api.restful-api.dev/objects` (Fetch all products)
- **POST**: `https://api.restful-api.dev/objects` (Add a new product)
- **GET**: `https://api.restful-api.dev/objects/:id` (Fetch a specific product)
- **DELETE**: `https://api.restful-api.dev/objects/:id` (Delete a product)

