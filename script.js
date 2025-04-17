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
let mylibrary = [];
let newBook;

// This Fuction to add book contructors to the library
function addBookToLibrary() {
  e.preventDefault(); // prevent page refresh on submit

const title = document.getElementById("title").value;  
const author= document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const hasBeenRead = document.getElementById("read").checked;

newBook = new Book(title, author, pages, hasBeenRead);
mylibrary.push(newBook); 
newBook.bookData();

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
  




























