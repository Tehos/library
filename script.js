// const title = document.querySelector(".title");
// const author = document.querySelector(".author");
// const pages = document.querySelector(".pages");
const library = document.querySelector(".library");
const visible = document.querySelectorAll(".visible");
const hidden = document.querySelectorAll(".hidden");
const addButton = document.querySelector(".add-button");


const addBookButton = document.querySelector(".add-book-button");

addBookButton.addEventListener("click", ()=> {
    for(i=0;i<visible.length;i++){
        visible[i].classList.toggle('hidden');
    }
})



addButton.addEventListener("click", ()=>{
    for(i=0; i<visible.length; i++){
        visible[i].classList.toggle("hidden");

    }
});





// function createBookCard(){
//     const newDiv = document.createElement("div");
//     newDiv.classList.add("book");
//     library.appendChild(newDiv);
//     const book = library.querySelector(".book");
//     console.log(book);
//     (()=>{
        
//     })();
// }

// createBookCard();


const myLibrary = [];


// // This is a function factory that creates book objects
// const bookFactory = (title, author, pages) => {
//     return {title, author, pages}
// }

// //This is a function that adds the book objects to the 'myLibrary' array
// function addBookToLibrary(book){
//     myLibrary.push(book);
//     function displayBook(){
//         title.textContent = `Title: ${book.title}`;
//         author.textContent = `Author: ${book.author}`;
//         pages.textContent = `Pages: ${book.pages}`;
//     }
//     displayBook();
// }

// const theHobbit = bookFactory('The Hobbit', 'J.R.R Tolkien', 250);
// const steppenWolf = bookFactory('Steppenwolf', 'Herman Hesse', 256);
// const theTunnel = bookFactory('The Tunnel', 'Ernesto Sabato', 158)

// addBookToLibrary(theHobbit);
// addBookToLibrary(steppenWolf);
// addBookToLibrary(theTunnel);
// console.log(myLibrary);

