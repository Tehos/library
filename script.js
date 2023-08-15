const myLibrary = [];


// This is a function factory that creates book objects
const bookFactory = (title, author, pages) => {
    return {title, author, pages}
}

//This is a function that adds the book objects to the 'myLibrary' array
function addBookToLibrary(book){
    myLibrary.push(book);
    function displayBook(){
        
    }
}

const theHobbit = bookFactory('The Hobbit', 'J.R.R Tolkien', 250);
const steppenWolf = bookFactory('Steppenwolf', 'Herman Hesse', 256);
const theTunnel = bookFactory('The Tunnel', 'Ernesto Sabato', 158)

addBookToLibrary(theHobbit);
addBookToLibrary(steppenWolf);
addBookToLibrary(theTunnel);
console.log(myLibrary);