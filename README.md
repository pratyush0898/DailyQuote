# DailyQuote

**DailyQuote** is a simple, responsive website that displays a random motivational quote every time you click a button. It's perfect for a quick dose of inspiration throughout your day!

## Features

- Fetches random quotes using the **ZenQuotes API**.
- Displays the quote with stylized formatting (italicized, serif font).
- Includes a clean and simple design with navigation options.
- CORS proxy is used to bypass any CORS restrictions when fetching the quotes.

## Technologies Used

- **HTML**: For the structure of the website.
- **CSS**: For styling the layout and providing a smooth user experience.
- **JavaScript**: For dynamically fetching and displaying quotes.
- **ZenQuotes API**: To get random quotes.
- **CORS Proxy**: Using `https://cors-anywhere.herokuapp.com/` to bypass CORS restrictions when fetching quotes from an external API.

## Usage

- Upon opening the page, you will see a "Daily Quote Generator" title and a "Get a Quote" button.
- Click the **"Get a Quote"** button to fetch and display a new random quote.
- The quote will be displayed in italicized serif font, and the author's name will be shown below the quote.

## Demo

Check out a live demo here: [dailyquote-69.netlify.app](https://dailyquote-69.netlify.app).

## CORS Proxy

Since the ZenQuotes API doesn't support CORS out of the box, this project uses a free CORS proxy service: [https://cors-anywhere.herokuapp.com/](https://cors-anywhere.herokuapp.com/).

- This proxy adds the necessary headers to bypass CORS restrictions when making the API request.
- For production, you should consider setting up your own proxy server or finding a solution that doesn't require third-party proxies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.