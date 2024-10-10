# Books & Co - Bookstore Website

This project is a responsive bookstore website named **Books & Co**. It showcases books available for sale, with a detailed view for each book, along with pricing, quantity selection, and other essential features. The website includes an image carousel on the homepage and a detailed book description page.

## Project Structure

- **index.html**: The homepage of the bookstore, featuring a navigation bar, a carousel slider of book images, and links to various sections like Home, Books, Gifts, and Help.
- **bookdetails.html**: A page that displays detailed information about a specific book, including the book's title, description, price, and quantity selection.
- **homepage.css**: The main stylesheet for the homepage, responsible for the layout, colors, fonts, and styling of the carousel and footer.
- **bookdetails.css**: The stylesheet used for the book details page, ensuring consistent design for the book's description, pricing section, and navigation.
- **slide.js**: JavaScript file that controls the image carousel functionality on the homepage. It includes functions for sliding images, handling button clicks, and setting up intervals for automatic sliding.

## Features

### Homepage (index.html)
- **Header & Navigation**: Includes the website logo and navigation bar linking to Home, Books, Gifts, and Help pages.
- **Image Carousel**: A sliding image gallery on the homepage, controlled by `slide.js`, showcasing various book promotions.
- **Responsive Design**: Uses media queries to ensure the layout is adaptive across different screen sizes.
- **Footer**: Includes social media links (Twitter, Facebook, Instagram) and copyright information.

### Book Details Page (bookdetails.html)
- **Book Information**: Displays a detailed description of a selected book, including the title, summary, and price.
- **Quantity Selector**: Users can choose the number of books they want to purchase.
- **Responsive Design**: The layout is designed to adjust according to the screen size for mobile and desktop users.

### Carousel Functionality (slide.js)
- **Automatic Slideshow**: The image carousel changes images automatically every 3 seconds.
- **Manual Navigation**: Users can manually navigate the carousel using left and right buttons.
- **Hover Effects**: On hovering over the carousel, the buttons appear for navigation, and the slideshow pauses.

## How to Run

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/bookstore-website.git
    ```
2. **Open the HTML files**:
   - Navigate to the project folder and open `index.html` in your browser to view the homepage.
   - To view a specific book’s details, open `bookdetails.html`.

3. **Customize**:
   - Modify the HTML, CSS, or JavaScript files to customize the bookstore's layout or functionality as needed.
   - Add more books to the `bookdetails.html` page by replicating the structure of existing book entries.

## Technologies Used

- **HTML5**: Structure of the website and book details pages.
- **CSS3**: Styling of the layout, fonts, and responsiveness using external fonts from Google Fonts.
- **JavaScript**: Implemented for the image carousel functionality.

## Future Improvements

- Implement user authentication (Sign Up/Login functionality).
- Add a shopping cart feature.
- Connect the website to a back-end database for dynamic book listings and user reviews.

## License

This project is licensed under the MIT License.
