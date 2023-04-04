let quote=document.getElementById("quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");

// get api url
const url="https://api.quotable.io/random";

// get Quote function
let getQuote=()=>{

// fetch data 
    fetch(url)
// retreive ans convert data in json format
        .then((data)=> data.json())  
        // itme  dara quote and author 
         .then ((item) => {
       quote.innerText= item.content;
       author.innerText= item.author;
         });
    };
    // for the window load
window.addEventListener("load", getQuote);
// click event 

btn.addEventListener("click", getQuote);



let quate = document.getElementByIddBy("dheeraj")
conts url="dbjdbweud"

let getqu=()=>{
frtch(webkitURL)
.then((data)=>data.json())

.then(item=>item)
}