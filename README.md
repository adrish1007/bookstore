# Bookstore Website

![Website Screenshot](/home/adrish/Pictures/Screenshots/Screenshot from 2023-07-04 00-42-38.png)

This is a classic bookstore website that provides all the necessary features for users to browse and purchase books. The frontend is built with React.js, and the backend is developed using Node.js and Express.js. The user data is stored in a MongoDB database.

## General Info

The repository is divided into two sections: one for the server (backend) and another for the client (frontend). The server is deployed using Render, while the client is deployed through Netlify.

The website consists of three main webpages:

1. Homepage: On the homepage, users can view the top-selling books and subscribe for updates in the footer. They can also explore more books by navigating to the books page or proceed to the login page. In the login page, users can either log in with their credentials or create a new account by accessing the create user page. Additionally, users can search for their favorite books using the search engine provided.

2. Books Page: The books page displays all the books fetched from the bookstore server. The books are presented in a grid format, where each book is represented by a grid box. Each box contains two buttons: one for adding the book to the cart and another for viewing more details. When a user clicks the "Add to Cart" button, the book is added to their cart. Clicking "View More" fetches and displays additional information about the book.

3. Cart Page: The cart page shows all the books that have been added to the cart. It also displays the total amount payable after any applicable discounts. Users can adjust the quantity of books to be purchased. Payment can be made using either cash or online methods. After checkout, users are redirected to the homepage.

### Technologies Used

- Version Control Software: Git
- Testing: Manual
- Deployment: Render (server) and Netlify (client)
- Framework: MERN Stack (MongoDB, Express.js, React.js, Node.js)
- React-Router-Dom Version: 5.2.0

Feel free to explore the repository for more details and code implementation.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the necessary dependencies for the server and client by running `npm install` in both the `server` and `client` directories.
3. Start the server by running `npm start` in the `server` directory.
4. Start the client by running `npm start` in the `client` directory.
5. Replace only website links with `http://localhost:3000`.
6. Access the website in your browser at `http://localhost:3000`.

## Future Improvements

Here are some possible areas for future improvements:

- Implementing user authentication and authorization for secure access to user accounts.
- Adding a review/rating feature to allow users to provide feedback on books.
- Incorporating an online payment gateway for seamless online transactions.
- Enhancing the search functionality by implementing filters and sorting options.
- Implementing an admin dashboard for managing books, inventory, and user data.

Feel free to contribute to the project and suggest any improvements!
