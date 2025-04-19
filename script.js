// event listener to either create a new book and add it  
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addBookToLibrary);

const newBookBtn = document.querySelector("#newBtn");
newBookBtn.addEventListener("click", () => popUpform.style.display = "block");

const popUpForm = document.getElementById("popUp")
const closePopUp = document.querySelector(".close");

closePopUp.addEventListener("click", () => {
   popUpForm.style.display = "none"
});
// Book Contructors 
function Book(title, author, pages, hasBeenRead){  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasBeenRead = hasBeenRead;
}
// These variables create, and adds to the library
let myLibrary = [];
let newBook;

// This Fuction to add book contructors to the library
function addBookToLibrary(e) {
  e.preventDefault(); // prevent page refresh on submit

const title = document.getElementById("title").value;  
const author= document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const hasBeenRead = document.getElementById("read").checked;

newBook = new Book(title, author, pages, hasBeenRead);
mylibrary.push(newBook); 
newBook.bookData();
renderLibrary(); 

document.getElementById("form").reset();
popUpForm.style.display = "none"  
} 

Book.prototype.bookData = function () {
    console.log(
      "Author: " + this.author +
      "\nTitle: " + this.title +
      "\nPages: " + this.pages +
      "\nDid you read any of these?: " + (this.hasBeenRead ? "Yes" : "No")
    );
  };
  
  Book.prototype.toggleRead = function () {
    this.hasBeenRead = !this.hasBeenRead; 
  }; 
  
// render Library function
function renderLibrary() {
  const container = document.getElementById("library-container");
  container.innerHTML = ""; // clear old cards before rendering new ones

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("h3");
    author.textContent = "Author: " + book.author;

    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;

    const read = document.createElement("p");
    read.textContent = "Read: " + (book.hasBeenRead ? "Yes" : "No");

    //  Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.setAttribute("data-index", index);

    const buttonSection = document.createElement("div");
    buttonSection.classList.add("card-buttons");
    buttonSection.appendChild(removeBtn);

    //  Assemble card
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(buttonSection);

    container.appendChild(card);

    // Event to Remove Book
    removeBtn.addEventListener("click", (e) => {
      const indexToRemove = e.target.getAttribute("data-index");
      myLibrary.splice(indexToRemove, 1);
      renderLibrary();
    });
  });
}


























