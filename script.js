let myLibrary = [];
let booksShown = [];
let object_count = 0;
let count = 1;

const add_book = document.querySelector("#add_book");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
const book = document.querySelector("#books");
const bookLibrary = document.querySelector("#data_container");

const targetDiv = document.querySelector('.model')
const targetDiv2 = document.querySelector('#add_book')

document.addEventListener('click', (e) => {
const isClickedInsideDiv = e.composedPath().includes(targetDiv)
const isClickedInsideDiv2 = e.composedPath().includes(targetDiv2)

    if (!isClickedInsideDiv && !isClickedInsideDiv2) {
        console.log('clicked inside of div')
        overlay.style.display = 'none';
    } 

})

add_book.addEventListener('click',() => {
    overlay.style.display = 'block';
})

form.addEventListener("submit",() => {

    var nameValue = document.querySelector("#nameinp").value;
    var authorValue = document.querySelector("#authorinp").value;
    var pagesValue = document.querySelector("#pagesinp").value;
    var readValue = document.querySelector("#readinp").checked;

    object_count = object_count + 1;

    myLibrary[object_count] = {
        name : nameValue,
        author : authorValue,
        pages: pagesValue,
        read : readValue
    }

    newBook(nameValue,authorValue,pagesValue,readValue)

    const readButton = document.querySelectorAll("#rusread")

        readButton.forEach(buttons => {
            buttonsClone = buttons.cloneNode(true);
            buttons.parentNode.replaceChild(buttonsClone, buttons);

            buttonsClone.addEventListener("click",(e) =>{
            readCheck(e.target.parentElement)
    })

    const removeButton = document.querySelectorAll("#rusread + button")

    removeButton.forEach(buttons => {
        buttonsClone = buttons.cloneNode(true);
        buttons.parentNode.replaceChild(buttonsClone, buttons);

        buttonsClone.addEventListener("click",(e) =>{
        removeCard(e.target.parentElement)
        })
    })

});

    overlay.style.display = 'none';

})


function newBook(name,author,pages,read){
    
    let newBook = book.cloneNode(true);
    let lastbook = bookLibrary.lastChild

    lastbook.after(newBook);
    console.log(bookLibrary.children)

    let actualBook = bookLibrary.children[object_count];
    actualBook.className = "new_book"
    actualBook.children[0].textContent = name;
    actualBook.children[1].textContent = author;
    actualBook.children[2].textContent = pages;

    if (read){
        actualBook.children[3].textContent = "Read";
    }
    else{
        actualBook.children[3].textContent = "Not Read";
    }

}

function readCheck(current_book){

    let i = Array.from(current_book.parentElement.children).indexOf(current_book);

    console.log(i)
    console.log(myLibrary[i].read)

    if (myLibrary[i].read == false) {
        myLibrary[i].read = true;
        current_book.children[3].textContent = "Read";
    }
    else {
        myLibrary[i].read = false;
        current_book.children[3].textContent = "Not Read";
    }
}

function removeCard(current_book){

    let i = Array.from(current_book.parentElement.children).indexOf(current_book);
    myLibrary.splice(i,i+1)
    current_book.remove();
    object_count = object_count -1;
}

function Book(name,author,pages,read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}