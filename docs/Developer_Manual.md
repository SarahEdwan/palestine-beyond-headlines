
# Developer Manual

## 1. How to Install the Application and Dependencies

### Prerequisites

Before you can run the application, ensure you have the following installed on your local machine:

- **Node.js** (>= v14.0)
- **npm** (comes with Node.js)

### Installing Dependencies

1. Clone the repository:

```bash
git clone https://github.com/your-repo/your-project-name.git
cd your-project-name
```

2. Install the required dependencies using npm:

```bash
npm install
```

This will install all necessary dependencies, including **Express.js**, **Supabase**, and any other libraries you use in your project.

### Environment Setup

1. **Supabase Setup**:
   - Create a Supabase account at [supabase.com](https://supabase.com) and create a new project.
   - In the Supabase dashboard, create the required database tables (`resources`, `testimonies`, etc.).
   - Obtain your **Supabase API URL** and **Anon API Key** from the Supabase dashboard.
   - In your local project directory, create a `.env` file and set the following:

   ```plaintext
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

2. **Frontend Setup**:
   - Your front end (HTML, CSS, and JavaScript) will automatically reference the Supabase client via the `supabase.js` file.

## 2. How to Run the Application on a Server

### Running Locally

1. Run the server using Node.js:

```bash
node server.js
```

The application will start and you can access it at `http://localhost:5000`.

2. Open `index.html` and other pages in your browser.

### Deploying to a Server (e.g., Vercel, Render, or Heroku)

- To deploy your **Express backend**, you can push your project to a platform like **Heroku**, **Render**, or **Vercel**. Follow their guides to deploy Node.js applications.
- For frontend deployment, ensure all static files (HTML, CSS, JS) are bundled and uploaded to platforms like **Netlify**, **Vercel**, or your server.

## 3. How to Run Any Tests

While we currently do not have unit tests in place, you can create tests using tools like **Jest** or **Mocha** for backend API endpoints.

To run the tests (if added), follow these steps:

1. Install testing dependencies (for Jest, for example):

```bash
npm install --save-dev jest
```

2. Create your test files (e.g., `test/api.test.js`).

3. Run tests with:

```bash
npm test
```

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
- There may be **CORS issues** for API requests when running the frontend locally due to mixed content (HTTP/HTTPS). This can be resolved by deploying the backend to a remote server.
- **Error handling** is currently basic, and more specific errors (e.g., resource not found) will need to be added.

### Roadmap:
- **Enhance error handling**: Implement more detailed error messages for API calls.
- **Add more interactive elements**: Include user authentication, allowing users to leave feedback or rate resources.
- **Expand API functionality**: Add more endpoints to handle more types of resources or functionality.
- **Implement Testing**: Write unit and integration tests for both backend and frontend using **Jest** or **Mocha**.

## 6. Documentation Files

Documentation should be saved under the `docs/` directory. The structure will look like:

```
/project-folder
  /docs
    - Developer_Manual.md
    - API_Documentation.md
```

---

## Conclusion

This document should help developers easily set up the project, understand the APIs, and continue development after you leave the team.
