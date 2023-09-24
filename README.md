

# MVC Challenge: Tech Blog
Overview
This blog site is built using the Model-View-Controller (MVC) architectural pattern, resembling a CMS-style interface.

Table of Contents
Installation
Usage
Demo
Questions
Installation
Clone the repository:

bash
Copy code
git clone
Node.js and Modules:
Ensure Node.js and the required modules are installed for local operations, editing, and running the server:

Copy code
npm install
Usage
Users can freely browse the homepage and read current blog posts without needing to sign in. However, to create or engage with posts, signing in is required.

Click on the "login" button in the navigation bar to access the login page, where you can log in or create a new user account.

Once logged in, users can create, edit their posts, and comment on existing posts. The sign-in session is valid for 2 hours, after which users will be automatically logged out.

Running the Server Locally
Start by creating and seeding your MySQL database.

Create a .env file in the root directory and provide the following information:

makefile
Copy code
DB_NAME=tech_blog_db
DB_USER=<your MySQL username>
DB_PW=<your MySQL password>
To seed the database with mock data, run the command npm run seed in the terminal from the root directory.

Finally, initiate the server by typing npm start into your terminal. Navigate to http://localhost:3001/ in your browser to access the homepage.
