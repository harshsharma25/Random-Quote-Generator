console.log(`JavaScript running`);
let button = document.querySelector("button")
let quote = document.querySelector(".quote")
let quoteName = document.querySelector(".quote-name");
let quoteAuthor = document.querySelector(".quote-author");
document.addEventListener("DOMContentLoaded",()=>{
     let random = Math.floor(Math.random()*30);
    getData(random)
})
button.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*30);
    console.log(random);
    getData(random);
})
let apiUrl = 'https://dummyjson.com/quotes';
async function getData(random) {
    try {
        let response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`HTTP server error: ${response.status}`); // More descriptive error
        }
        const data = await response.json(); 
        console.log(data);
        // console.log(data.quotes[random].quote);
        console.log(random);
       quoteName.textContent =  (data.quotes[random].quote);
       quoteAuthor.textContent = `-${data.quotes[random].author}`;
    } catch (error) {
        console.error("Error fetching data:", error.message); // Improved error logging
    }
}

// getData();
