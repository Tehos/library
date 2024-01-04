// const title = document.querySelector(".title");
// const author = document.querySelector(".author");
// const pages = document.querySelector(".pages");
const library = document.querySelector(".library");
const visible = document.querySelectorAll(".visible");
const hidden = document.querySelectorAll(".hidden");
const addButton = document.querySelector(".add-button");
const newBookButton = document.querySelector(".new-book-button");
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');




newBookButton.addEventListener("click", ()=> { /*This makes the popup appear.*/
    for(i=0;i<visible.length;i++){
        visible[i].classList.toggle("hidden");
    }
})



addButton.addEventListener("click", ()=>{ /*This makes the popup disappear.*/
    for(i=0; i<visible.length; i++){
        visible[i].classList.toggle("hidden");
    }



});



const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
   
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
    createBookCard(myLibrary[myLibrary.length-1].title, myLibrary[myLibrary.length-1].author, myLibrary[myLibrary.length-1].pages);
}

function createBookCard(title,author,pages){
    library.appendChild(Object.assign(document.createElement("div"), {classList: "book"}));
    let books = document.getElementsByClassName("book");
    books[books.length-1].appendChild(Object.assign(document.createElement("div"), {classList: "title", innerHTML:`Title: ${title}`}));
    books[books.length-1].appendChild(Object.assign(document.createElement("div"), {classList: "author", innerHTML:`Author: ${author}`}));
    books[books.length-1].appendChild(Object.assign(document.createElement("div"), {classList: "pages", innerHTML:`Pages: ${pages}`}));
}


