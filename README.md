
# Node.js Application

A lightweight node.js web application built with express. This project demonstrates how to serve static files and handle multiple custom routes using modular Express architecture. It includes dynamic routing, chained middleware, and file serving.

## Technologies Used

- **HTML** – for static content (`a.html`)
- **CSS** - embedded in `a.html` for styling
- **Node.js** – to run a lightweight server (`index.js`)
- **Built-in Node modules**:
  - `path` – to resolve file paths safely

## Available Routes

| Route            | Description                                                                |
|------------------|----------------------------------------------------------------------------|
| `/`              | Returns a plain "Hello World!" message                                      |
| `/about`         | Displays a simple HTML heading for the About page                           |
| `/contact`       | Shows contact information in an HTML heading                                |
| `/date`          | Displays the current date and time formatted in UK style                    |
| `/welcome/:name` | Dynamic route that greets the user by name (e.g., `/welcome/Alice`)       |
| `/chain`         | Demonstrates chained middleware with console logging and response handling  |
| `/file`          | Serves the `a.html` file located in the project root                        |

## How to Install and Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Hwane14/04_express_33821100.git
cd 04_express_33821100 
```

### 2. Install Node.js (if not already installed)
Download and install from nodejs.org

### 3. Install dependencies
```bash
npm install
```

### 4. Run the server
```bash
node index.js
```

### 5. Open your browser
Visit: http://localhost:8000
You should see the home page. Experiment by visiting the routes listed above.