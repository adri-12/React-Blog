# React Blogging Application

This is a simple React application that allows users to create new blog posts and display them. The application uses React Router, useState, useNavigate, useEffect and useFetch hooks.

## Getting Started
Install Node.js on your system if you haven't already.

To get started, clone this repository and run npm install to install the dependencies. Then, run npm start to start the application. The application will be available at http://localhost:3000.

open a terminal or command prompt and run the following command to install the JSON server package globally:

"npm install -g json-server"

This command will install the latest version of the JSON server globally on your system.
Start the JSON server by running the following command in the terminal, pointing to the directory where the db.json file is located and "--port 8000" specifies the port number on which the JSON server will run:

"json-server --watch db.json --port 8000"
This command will start the JSON server and watch the db.json file for changes.

### Usage
### Creating a New Post

To create a new post, click on the "New Article" button in the navigation bar. This will take you to the create post page where you can enter a post title, author name, content, and select a category. To submit the new post, click on the "Add Post" button.

### Displaying Posts

On the home page, you can view a list of all the blog posts that have been created. Click on a post title to view the full post.

### Deleting Posts

You can delete a post by clicking on the delete button on the post preview.
