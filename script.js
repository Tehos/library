// const title = document.querySelector(".title");
// const author = document.querySelector(".author");
// const pages = document.querySelector(".pages");
const library = document.querySelector(".library");
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const bookForm = document.getElementById("book-form");
const newBookButton = document.getElementById("new-book-button");
const addButton = document.getElementById("add-button");
const cancelButton = document.getElementById("cancel-button")



newBookButton.addEventListener("click", ()=> {
    bookForm.showModal();
})


addButton.addEventListener("click", (event)=>{
    event.preventDefault();
    addBookToLibrary(titleInput.value , authorInput.value , pagesInput.value);
    bookForm.close();

});

cancelButton.addEventListener("click", ()=>{
    bookForm.close();
})



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

