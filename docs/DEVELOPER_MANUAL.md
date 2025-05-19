
# Developer Manual

## 1. How to Install the Application and Dependencies

### Prerequisites

Before you can run the application, ensure you have the following installed on your local machine:

- **Node.js** 
- **npm** 

### Installing Dependencies

1. Clone the repository:

```bash
git clone https://github.com/SarahEdwan/palestine-beyond-headlines.git
cd palestine-beyond-headlines
```

2. Install the required dependencies using npm:

```bash
npm install
```

This will install all necessary dependencies and any other libraries used.

## 2. How to Run the Application on a Server

### Running Locally

1. Run the server using Node.js:

```bash
node server.js
```

The application will start and you can access it at `http://localhost:5000`.

2. Open `index.html` and other pages in your browser.

## 4. API for the Server Application

Here are the endpoints available in your application:

### **1. GET /api/resources**
- **Purpose**: Retrieve the list of submitted resources.
- **Response**: Returns an array of resources in JSON format. Each resource contains `title`, `url`, `description`, and `timestamp`.

Example:

```json
[
  {
    "title": "Palestine News",
    "url": "https://example.com/news",
    "description": "A news website about Palestine.",
    "timestamp": "2023-05-21T10:00:00Z"
  },
  ...
]
```

### **2. POST /api/resources**
- **Purpose**: Submit a new resource.
- **Request Body**: 
  - `title` (string): The title of the resource.
  - `url` (string): URL of the resource.
  - `description` (string): A short description of the resource.

Example Request Body:
```json
{
  "title": "Palestine History",
  "url": "https://example.com/history",
  "description": "An educational resource on Palestinian history."
}
```

- **Response**: Returns the submitted resource object with a `timestamp`.

Example Response:
```json
{
  "id": 1,
  "title": "Palestine History",
  "url": "https://example.com/history",
  "description": "An educational resource on Palestinian history.",
  "timestamp": "2023-05-21T10:00:00Z"
}
```

### Error Handling

- **404**: If the resource is not found.
- **400**: If the data is missing or invalid.
- **500**: If there is a server error.

## 5. Known Bugs and Roadmap for Future Development

### Known Bugs:
- **API Limits**: The current setup uses **Mediastack API** (latest news). There are **rate limits** if too many requests are made, which will result in:
  - **Temporary data retrieval failures**.

### Roadmap:
- **Expand API functionality**: Add more endpoints to handle more types of resources or functionality.
- **Implement Testing**: Write tests for both backend and frontend.
