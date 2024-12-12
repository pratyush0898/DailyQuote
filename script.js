const DisplayQuote = async () => {
    try {
        const url = 'https://zenquotes.io/api/random';
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        
        // Fetch a random quote through the CORS proxy
        const response = await fetch(proxyUrl + url);
        const data = await response.json();

        // Extract quote and author
        const quote = data[0].q;
        const author = data[0].a;

        // Get the HTML formatted version (optional)
        const htmlQuote = data[0].h;

        // Display the quote and author
        const quoteElement = document.querySelector(".quote");
        const authorElement = document.querySelector("#author");

        // Apply styles to the quote
        quoteElement.style.fontFamily = "'Georgia', serif";
        quoteElement.style.fontStyle = "italic";
        quoteElement.style.fontSize = "32px";

        // Update the quote and author text
        quoteElement.innerHTML = `&#8220;${quote}&#8221;`; // Adds stylized quote marks
        authorElement.innerHTML = `- ${author}`; // Display author

        // Optional: Display the HTML version with blockquote (if you prefer)
        // document.body.innerHTML += htmlQuote;

    } catch (error) {
        console.error("Error fetching quote:", error);
    }
};
